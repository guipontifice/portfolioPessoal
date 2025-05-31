import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function TransitionOverlay({ onMidTransition }) {
  const overlayRef = useRef();
  const waveRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onMidTransition) onMidTransition();
      },
    });

    tl.to(overlayRef.current, {
      y: 0,
      duration: 0.6,
      ease: "power2.inOut",
    });

    // Animação leve na onda
    gsap.fromTo(
      waveRef.current,
      { y: 50 },
      {
        y: 0,
        duration: 1,
        ease: "power2.out",
      }
    );
  }, [onMidTransition]);

  return (
    <div
      ref={overlayRef}
      style={{
        transform: "translateY(100%)",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#fb4566",
        zIndex: 9999,
        pointerEvents: "none",
      }}
    >
      {/* SVG decorativo da onda */}
      <svg
        ref={waveRef}
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100px",
        }}
      >
        <path
          d="M0,40 C360,120 1080,0 1440,80 L1440,100 L0,100 Z"
          fill="#0b050a"
        />
      </svg>
    </div>
  );
}