import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollTriggerC() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".third",
        start: "top 80%", // quando o topo da .third encostar em 80% da viewport
        end: "bottom center",
        scrub: 1,
      }
    });

    tl.fromTo(
      ".divisoria",
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power2.out" }
    ).fromTo(
      ".texto",
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power2.out" },
      "<" // ao mesmo tempo que a última divisória
    );
  }, []);

  return (
    <div className="third">
      <div className="divisoria"></div>
      <div className="texto">
        <h2>Minha expertise</h2>
        <p>Confira algumas de minhas tecnologias</p>
      </div>
      <div className="divisoria"></div>
    </div>
  );
}
