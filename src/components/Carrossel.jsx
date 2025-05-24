import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/scss/styles.scss";

gsap.registerPlugin(ScrollTrigger);

const Carrossel = () => {
  return (
    <div className="carrossel-container">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const sectionRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalScrollLine1 =
        line1Ref.current.scrollWidth - sectionRef.current.offsetWidth;
      const totalScrollLine2 =
        line2Ref.current.scrollWidth - sectionRef.current.offsetWidth;

      gsap.to(line1Ref.current, {
        x: () => `-${totalScrollLine1}px`,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${window.innerHeight}`, // 100vh
          scrub: true,
          pin: true,
        },
      });

      gsap.to(line2Ref.current, {
        x: () => `-${totalScrollLine2}px`,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: () => `top -100vh`, // começa na segunda "tela"
          end: () => `+=${window.innerHeight}`, // 100vh
          scrub: true,
          pin: false,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section">
      <div className="motion">
        <div ref={line1Ref} className="motion-div">
          {[...cards, ...cards].map((card, index) => (
            <Card card={card} key={index} />
          ))}
        </div>
      </div>
      <div className="motion">
        <div ref={line2Ref} className="motion-div">
          {[...cards2, ...cards2].map((card, index) => (
            <Card2 card={card} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card = ({ card }) => (
  <div className="cards">
    <div className="circulo"></div>
    <div className="card"></div>
    <div className="box">
      <p className="span">{card.title}</p>
    </div>
  </div>
);

const Card2 = ({ card }) => (
  <div className="cards">
    <div className="circulo"></div>
    <div className="card"></div>
    <div className="box">
      <p className="span">{card.title}</p>
    </div>
  </div>
);

export default Carrossel;

const cards = [
  { title: "JavaScript", id: 1 },
  { title: "TypeScript", id: 2 },
  { title: "React", id: 3 },
  { title: "Angular", id: 4 },
];

const cards2 = [
  { title: "SEO", id: 1 },
  { title: "UX/UI", id: 12 },
  { title: "Acessibilidade", id: 3 },
  { title: "Documentação", id: 4 },
];
