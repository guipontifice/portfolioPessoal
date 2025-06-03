import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollTriggerC() {
  const containerRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".third .divisoria",
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".third",
            start: "top 80%",
            end: "bottom center",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".third .texto",
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".third",
            start: "top 80%",
            end: "bottom center",
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="third" ref={containerRef}>
      <div className="divisoria"></div>
      <div className="texto">
        <h2>Minha expertise</h2>
        <p>Confira algumas de minhas tecnologias</p>
      </div>
      <div className="divisoria"></div>
    </div>
  );
}
