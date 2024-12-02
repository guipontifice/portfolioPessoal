import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import "../styles/scss/styles.scss";
const Carrossel = () => {
  return (
    <div className="">
      <div className="">
        <span className="">Scroll down</span>
      </div>
      <HorizontalScrollCarousel />
      <div className="">
        <span className="">Scroll up</span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const { scrollYProgress2 } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-1%", "-55%"]);
  const xy = useTransform(scrollYProgress, [0, 1], ["-1%", "-55%"]);
  return (
    <section ref={targetRef} className="section">
      <div className="motion">
        <motion.div style={{ x }} className="motion-div">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
          
        </motion.div>
      </div>
      <div className="motion">
        <motion.div style={{ xy }} className="motion-div">
          {cards2.map((card) => {
            return <Card2 card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div key={card.id} className="cards">
      <div className="circulo"></div>
      <div className="card"></div>
      <div className="box">
        <p className="span">{card.title}</p>
      </div>
    </div>
  );
};

const Card2 = ({ card }) => {
  return (
    <div key={card.id} className="cards">
      <div className="circulo"></div>
      <div className="card"></div>
      <div className="box">
        <p className="span">{card.title}</p>
      </div>
    </div>
  );
};
export default Carrossel;

const cards = [
  {
    title: "JavaScript",
    id: 1,
  },
  {
    title: "TypeScript",
    id: 2,
  },
  {
    title: "React",
    id: 3,
  },
  {
    title: "NodeJS",
    id: 4,
  },
  {
    title: "GIT",
    id: 5,
  },
  {
    title: "MongoDB",
    id: 6,
  },
  {
    title: "Jest",
    id: 7,
  },
];
const cards2 = [
  {
  title: "SEO",
  id: 1,
},
  {
  title: "UX/UI",
  id: 12,
},
  {
  title: "Acessibilidade",
  id: 3,
},
  {
  title: "Documentação",
  id: 4,
},
  {
  title: "Algoritmos",
  id: 5,
},
  {
  title: "CI/CD",
  id: 6,
},
  {
  title: "Inglês Avançado",
  id: 7,
},
  ];
