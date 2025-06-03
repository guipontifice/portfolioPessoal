import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Second = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".second",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        defaults: {
          ease: "power3.out",
          duration: 0.6,
        },
      });

      tl.from(".second .texto p", {
        y: 40,
        opacity: 0,
        stagger: 0.2,
      }).from(".second .botao", {
        y: 30,
        opacity: 0,
      }, "-=0.3"); // começa antes do fim da última linha
    });

    return () => ctx.revert();
  }, []);

  return null;
};

export default Second;