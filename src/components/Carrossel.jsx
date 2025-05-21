import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/scss/styles.scss";

gsap.registerPlugin(ScrollTrigger);

const Carrossel = () => {
  return (
    <div className="carrossel-container">
      <div><span>Scroll down</span></div>
      <HorizontalScrollCarousel />
      <div><span>Scroll up</span></div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const sectionRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(line1Ref.current, {
        x: "-55%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(line2Ref.current, {
        x: "55%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
  start: "top bottom",
  end: "bottom top",
  scrub: true,
  markers: true, // remover depois
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section">
      <div className="motion">
        <div ref={line1Ref} className="motion-div">
          {cards.map((card) => <Card card={card} key={card.id} />)}
        </div>
      </div>
      <div className="motion">
        <div ref={line2Ref} className="motion-div">
          {cards2.map((card) => <Card2 card={card} key={card.id} />)}
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
  { title: "NodeJS", id: 4 },
  { title: "GIT", id: 5 },
  { title: "MongoDB", id: 6 },
  { title: "Jest", id: 7 },
];

const cards2 = [
  { title: "SEO", id: 1 },
  { title: "UX/UI", id: 12 },
  { title: "Acessibilidade", id: 3 },
  { title: "Documentação", id: 4 },
  { title: "Algoritmos", id: 5 },
  { title: "CI/CD", id: 6 },
  { title: "Inglês Avançado", id: 7 },
];
