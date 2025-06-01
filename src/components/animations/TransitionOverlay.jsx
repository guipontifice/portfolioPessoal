import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function TransitionOverlay({ onCompleteTransition }) {
  const overlayRef = useRef();
  const waveTopRef = useRef();
  const waveBottomRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

    gsap.set(overlayRef.current, { y: "100%" });
    gsap.set(waveTopRef.current, { y: -50 });
    gsap.set(waveBottomRef.current, { y: 50 });

    tl.to(overlayRef.current, {
      y: 0,
      duration: 0.6,
      ease: "power2.inOut",
    })
    .to(
      [waveTopRef.current, waveBottomRef.current],
      {
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      "<"
    )
    .to({}, { duration: 0.2 }) // pequena pausa visual
    .to(overlayRef.current, {
      y: "-100%",
      duration: 0.6,
      ease: "power2.inOut",
      onComplete: () => {
        if (onCompleteTransition) onCompleteTransition(); // aqui você navega
      },
    });
  }, [onCompleteTransition]);

  return (
    <div
      ref={overlayRef}
      style={{
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
      {/* Onda superior */}
      <svg
        ref={waveTopRef}
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        aria-hidden="true"
        role="presentation"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "50px",
          transform: "rotate(180deg)", // inverte a onda
        }}
      >
        <path
          d="M0,40 C360,120 1080,0 1440,80 L1440,100 L0,100 Z"
          fill="#0b050a"
        />
      </svg>

      {/* Onda inferior */}
      <svg
        ref={waveBottomRef}
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        aria-hidden="true"
        role="presentation"
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
