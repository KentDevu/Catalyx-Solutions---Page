"use client";

import { useEffect, useRef } from 'react';
import { Renderer, Camera, Geometry, Program, Mesh } from 'ogl';
import './Particles.css';

const defaultColors = ['#ffffff', '#ffffff', '#ffffff'];

const hexToRgb = (hex: string) => {
	hex = hex.replace(/^#/, '');
	if (hex.length === 3) {
		hex = hex
			.split('')
			.map(c => c + c)
			.join('');
	}
	const int = parseInt(hex, 16);
	const r = ((int >> 16) & 255) / 255;
	const g = ((int >> 8) & 255) / 255;
	const b = (int & 255) / 255;
	return [r, g, b];
};

const vertex = /* glsl */ `
	attribute vec3 position;
	attribute vec4 random;
	attribute vec3 color;
  
	uniform mat4 modelMatrix;
	uniform mat4 viewMatrix;
	uniform mat4 projectionMatrix;
	uniform vec2 uMouse;
	uniform float uMouseStrength;
	uniform float uTime;
	uniform float uSpread;
	uniform float uBaseSize;
	uniform float uSizeRandomness;
  
	varying vec4 vRandom;
	varying vec3 vColor;
  
	void main() {
		vRandom = random;
		vColor = color;
    
		vec3 pos = position * uSpread;
		pos.z *= 10.0;
    
		vec4 mPos = modelMatrix * vec4(pos, 1.0);
		float t = uTime;
		mPos.x += sin(t * random.z + 6.28 * random.w) * mix(0.1, 1.5, random.x);
		mPos.y += sin(t * random.y + 6.28 * random.x) * mix(0.1, 1.5, random.w);
		mPos.z += sin(t * random.w + 6.28 * random.y) * mix(0.1, 1.5, random.z);
    
		// mouse interaction: push/pull particles based on distance to uMouse (normalized screen coords)
		// approximate by using pos.xy in world space vs uMouse (which is supplied in -1..1 range)
		vec2 mouse = uMouse;
		vec2 pXY = vec2(mPos.x, mPos.y);
		float dist = length(pXY - vec2(mouse.x * uSpread, mouse.y * uSpread));
		float effect = uMouseStrength * exp(-dist * 0.5);
		mPos.x += (pXY.x - mouse.x * uSpread) * -0.06 * effect;
		mPos.y += (pXY.y - mouse.y * uSpread) * -0.06 * effect;
    
		vec4 mvPos = viewMatrix * mPos;

		if (uSizeRandomness == 0.0) {
			gl_PointSize = uBaseSize;
		} else {
			gl_PointSize = (uBaseSize * (1.0 + uSizeRandomness * (random.x - 0.5))) / length(mvPos.xyz);
		}

		gl_Position = projectionMatrix * mvPos;
	}
`;

const fragment = /* glsl */ `
	precision highp float;
  
	uniform float uTime;
	uniform float uAlphaParticles;
	varying vec4 vRandom;
	varying vec3 vColor;
  
	void main() {
		vec2 uv = gl_PointCoord.xy;
		float d = length(uv - vec2(0.5));
    
		if(uAlphaParticles < 0.5) {
			if(d > 0.5) {
				discard;
			}
			gl_FragColor = vec4(vColor + 0.2 * sin(uv.yxx + uTime + vRandom.y * 6.28), 1.0);
		} else {
			float circle = smoothstep(0.5, 0.4, d) * 0.8;
			gl_FragColor = vec4(vColor + 0.2 * sin(uv.yxx + uTime + vRandom.y * 6.28), circle);
		}
	}
`;

type ParticlesProps = {
	particleCount?: number;
	particleSpread?: number;
	speed?: number;
	particleColors?: string[];
	moveParticlesOnHover?: boolean;
	particleHoverFactor?: number;
	alphaParticles?: boolean;
	particleBaseSize?: number;
	sizeRandomness?: number;
	cameraDistance?: number;
	disableRotation?: boolean;
	className?: string;
	scrollPosition?: { x: number; y: number };
	scrollPositionRef?: React.RefObject<{ x: number; y: number }>;
};

const Particles = ({
	particleCount = 200,
	particleSpread = 5,
	speed = 0.1,
	particleColors,
	moveParticlesOnHover = false,
	particleHoverFactor = 1,
	alphaParticles = false,
	particleBaseSize = 100,
	sizeRandomness = 1,
	cameraDistance = 5,
	disableRotation = false,
	className,
	scrollPosition,
	scrollPositionRef
}: ParticlesProps) => {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const mouseRef = useRef({ x: 0, y: 0 });
	
	// Use the ref if provided, otherwise fallback to scrollPosition prop
	const scrollPosToUse = scrollPositionRef || { current: scrollPosition };

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		// Clear any existing canvas to prevent multiple WebGL contexts
		while (container.firstChild) {
			container.removeChild(container.firstChild);
		}

		const renderer = new Renderer({ depth: false, alpha: true });
		// ogl expects a WebGL2-like context attached to its renderer; cast to any to avoid TS errors
		const gl = renderer.gl as any;
		const canvas = gl.canvas as HTMLCanvasElement;
		canvas.style.width = '100%';
		canvas.style.height = '100%';
		canvas.style.display = 'block';
		container.appendChild(canvas);
		gl.clearColor(0, 0, 0, 0);
		
		console.log('[Particles] Canvas created:', canvas.width, 'x', canvas.height);

		const camera = new Camera(gl, { fov: 15 });
		camera.position.set(0, 0, cameraDistance);

		const resize = () => {
			const width = container.clientWidth;
			const height = container.clientHeight;
			renderer.setSize(width, height);
			camera.perspective({ aspect: (gl.canvas as HTMLCanvasElement).width / (gl.canvas as HTMLCanvasElement).height });
		};
		window.addEventListener('resize', resize, false);
		resize();

		const handleMouseMove = (e: MouseEvent) => {
			const rect = container.getBoundingClientRect();
			const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
			const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
			mouseRef.current = { x, y };
			// debug
			// eslint-disable-next-line no-console
			console.debug('[Particles] mouse', { x: mouseRef.current.x, y: mouseRef.current.y });
		};

		const handleMouseDown = () => {
			if (program && program.uniforms && typeof program.uniforms.uMouseStrength.value === 'number') {
				program.uniforms.uMouseStrength.value = Math.min(6, program.uniforms.uMouseStrength.value + 2.5);
			}
			// eslint-disable-next-line no-console
			console.debug('[Particles] mousedown, strength=', program?.uniforms?.uMouseStrength?.value);
		};

		const handleMouseUp = () => {
			if (program && program.uniforms && typeof program.uniforms.uMouseStrength.value === 'number') {
				program.uniforms.uMouseStrength.value = Math.min(6, program.uniforms.uMouseStrength.value + 0.8);
			}
			// eslint-disable-next-line no-console
			console.debug('[Particles] mouseup, strength=', program?.uniforms?.uMouseStrength?.value);
		};

		if (moveParticlesOnHover) {
			// Listen on window so we still receive mousemove events even when the canvas has
			// pointer-events: none (we keep that so the particle layer doesn't block links/buttons).
			window.addEventListener('mousemove', handleMouseMove as any);
			window.addEventListener('mousedown', handleMouseDown as any);
			window.addEventListener('mouseup', handleMouseUp as any);
		}

		const count = particleCount;
		const positions = new Float32Array(count * 3);
		const randoms = new Float32Array(count * 4);
		const colors = new Float32Array(count * 3);
		const palette = particleColors && particleColors.length > 0 ? particleColors : defaultColors;

		for (let i = 0; i < count; i++) {
			let x: number, y: number, z: number, len: number;
			do {
				x = Math.random() * 2 - 1;
				y = Math.random() * 2 - 1;
				z = Math.random() * 2 - 1;
				len = x * x + y * y + z * z;
			} while (len > 1 || len === 0);
			const r = Math.cbrt(Math.random());
			positions.set([x * r, y * r, z * r], i * 3);
			randoms.set([Math.random(), Math.random(), Math.random(), Math.random()], i * 4);
			const col = hexToRgb(palette[Math.floor(Math.random() * palette.length)]);
			colors.set(col, i * 3);
		}

			const geometry = new Geometry(gl, {
			position: { size: 3, data: positions },
			random: { size: 4, data: randoms },
			color: { size: 3, data: colors }
		});

			const program = new Program(gl, {
				vertex,
				fragment,
				uniforms: {
					uTime: { value: 0 },
					uSpread: { value: particleSpread },
					uBaseSize: { value: particleBaseSize },
					uSizeRandomness: { value: sizeRandomness },
					uAlphaParticles: { value: alphaParticles ? 1 : 0 },
					uMouse: { value: [0, 0] },
					uMouseStrength: { value: 0 }
				},
				transparent: true,
				depthTest: false
			});

		const particles = new Mesh(gl, { mode: gl.POINTS, geometry, program });

		let animationFrameId = 0;
		let lastTime = performance.now();
		let elapsed = 0;
		let frameCount = 0;

		const update = (t: number) => {
			animationFrameId = requestAnimationFrame(update);
			const delta = t - lastTime;
			lastTime = t;
			elapsed += delta * speed;
			frameCount++;

			program.uniforms.uTime.value = elapsed * 0.001;

			// supply mouse uniforms so the shader can react to hover and bursts
			if (program && program.uniforms) {
				program.uniforms.uMouse.value = [mouseRef.current.x, mouseRef.current.y];
				if (typeof program.uniforms.uMouseStrength.value === 'number') {
					program.uniforms.uMouseStrength.value = Math.max(0, program.uniforms.uMouseStrength.value * 0.96);
				}
			}

			if (moveParticlesOnHover) {
				particles.position.x = -mouseRef.current.x * particleHoverFactor;
				particles.position.y = -mouseRef.current.y * particleHoverFactor;
			} else if (scrollPosToUse.current) {
				// Use scroll position for circular motion - read directly from ref
				particles.position.x = scrollPosToUse.current.x;
				particles.position.y = scrollPosToUse.current.y;
				
				// Debug log every 60 frames
				if (frameCount % 60 === 0) {
					console.log('[Particles] Applying position:', { 
						x: scrollPosToUse.current.x.toFixed(3), 
						y: scrollPosToUse.current.y.toFixed(3),
						particlePosX: particles.position.x.toFixed(3),
						particlePosY: particles.position.y.toFixed(3)
					});
				}
			} else {
				particles.position.x = 0;
				particles.position.y = 0;
			}

			if (!disableRotation) {
				// Subtle rotation for visual interest
				// @ts-ignore
				particles.rotation.x = Math.sin(elapsed * 0.0001) * 0.05;
				// @ts-ignore
				particles.rotation.y = Math.cos(elapsed * 0.0002) * 0.05;
			}

			renderer.render({ scene: particles, camera });
		};

		animationFrameId = requestAnimationFrame(update);

		return () => {
			window.removeEventListener('resize', resize);
			if (moveParticlesOnHover) {
				window.removeEventListener('mousemove', handleMouseMove as any);
				window.removeEventListener('mousedown', handleMouseDown as any);
				window.removeEventListener('mouseup', handleMouseUp as any);
			}
			cancelAnimationFrame(animationFrameId);
			
			// Clean up WebGL context
			const loseContext = gl.getExtension('WEBGL_lose_context');
			if (loseContext) {
				loseContext.loseContext();
			}
			
			// Remove canvas from DOM
			if (container.contains(gl.canvas as HTMLCanvasElement)) {
				container.removeChild(gl.canvas as HTMLCanvasElement);
			}
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <div ref={containerRef} className={`particles-container ${className ?? ''}`} />;
};

export default Particles;
