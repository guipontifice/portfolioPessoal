import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Second = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".second .texto p", {
        y: 30,
        opacity: 0,
        stagger: 0.25,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".second",
          start: "top 70%",
        },
      });

      gsap.from(".second .botao", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.5,
        scrollTrigger: {
          trigger: ".second",
          start: "top 70%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
};

export default Second;