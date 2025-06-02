import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Adicione 'children' como uma prop
export default function TransitionOverlay({ onCompleteTransition, onOverlayReadyForNavigation, children }) {
  const overlayRef = useRef();
  const waveTopRef = useRef();
  const waveBottomRef = useRef();
  const titleRef = useRef(); // Ref para o título

  useGSAP(() => {
    const tl = gsap.timeline();

    gsap.set(overlayRef.current, { y: "100%" });
    gsap.set(waveTopRef.current, { y: -50 });
    gsap.set(waveBottomRef.current, { y: 50 });
    gsap.set(titleRef.current, { opacity: 0, y: 20 }); // Estado inicial do título

    tl.to(overlayRef.current, {
      y: 0,
      duration: 0.6,
      ease: "power2.inOut",
      onComplete: () => {
        if (onOverlayReadyForNavigation) onOverlayReadyForNavigation();
      },
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
    .to(titleRef.current, { // Anima o título para aparecer
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
    }, "<0.2") // Começa um pouco depois das ondas
    .to({}, { duration: 0.2 }) // pequena pausa visual
    .to(overlayRef.current, {
        y: "-100%",
        duration: 0.6,
        ease: "power2.inOut",
        onComplete: () => {
            if (onCompleteTransition) onCompleteTransition();
        },
    }, "+=0.3") // Inicia a saída da overlay e do título juntos ou um pouco depois
    .to(titleRef.current, { // Anima o título para sumir
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: "power2.in",
    }, "<"); // Em sincronia com a saída da overlay


  }, []); // Dependências vazias para rodar apenas uma vez na montagem

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
        overflow: "hidden",
        display: "flex", // Para centralizar o conteúdo
        justifyContent: "center", // Para centralizar o conteúdo
        alignItems: "center", // Para centralizar o conteúdo
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
          fill="#0e090d"
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
          fill="#0e090d"
        />
      </svg>

      {/* Conteúdo (Título) que será renderizado por cima do SVG */}
      <div ref={titleRef} style={{ position: 'relative', zIndex: 10000, color: 'white', fontSize: '3em', fontWeight: 'bold', textAlign: 'center' }}>
        {children}
      </div>
    </div>
  );
}