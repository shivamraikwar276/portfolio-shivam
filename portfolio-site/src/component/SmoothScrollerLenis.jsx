import { useEffect } from "react";
import Lenis from "lenis";

const SmoothScrollerLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6,
      smoothWheel: true,
      smoothTouch: true,
      wheelMultiplier: 0.65,
      touchMultiplier: 1.2,
      lerp: 0.075,
    });

    let rafId;

    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
};

export default SmoothScrollerLenis;
