"use client";

import React from "react";
import lottie, { AnimationItem } from "lottie-web";

type Props = {
  animationData: any;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
  style?: React.CSSProperties;
};

export default function LottieAnimation({
  animationData,
  className,
  loop = true,
  autoplay = true,
  style,
}: Props) {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const animRef = React.useRef<AnimationItem | null>(null);

  React.useEffect(() => {
    if (!containerRef.current) return;

    // defensive check: if animationData is missing or an empty object, skip loading
    const isEmptyObject =
      animationData && typeof animationData === "object" && Object.keys(animationData).length === 0;
    if (!animationData || isEmptyObject) {
      // eslint-disable-next-line no-console
      console.warn(
        "LottieAnimation: provided animationData is empty or missing — the animation will not render. Check the JSON file at 'assets/Programming Computer-animation.json'."
      );
      return;
    }

    // debug: report that we're about to initialize
    // eslint-disable-next-line no-console
    console.log("LottieAnimation: initializing", {
      container: containerRef.current,
      animationKeys: animationData && typeof animationData === "object" ? Object.keys(animationData).slice(0, 20) : null,
    });

    // destroy any existing
    if (animRef.current) {
      animRef.current.destroy();
      animRef.current = null;
    }

    try {
      animRef.current = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop,
        autoplay,
        animationData,
      });
      // debug: confirm loadAnimation returned
      // eslint-disable-next-line no-console
      console.log("LottieAnimation: loadAnimation called", { animRefPresent: !!animRef.current });
    } catch (err) {
      // swallow - animation failures shouldn't break the page
      // eslint-disable-next-line no-console
      console.warn("Lottie animation failed to load", err);
    }

    return () => {
      if (animRef.current) {
        // eslint-disable-next-line no-console
        console.log("LottieAnimation: destroying animation");
        animRef.current.destroy();
        animRef.current = null;
      }
    };
  }, [animationData, loop, autoplay]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={style}
      aria-hidden
    />
  );
}
