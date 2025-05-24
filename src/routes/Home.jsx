import React, { useState, useEffect } from "react";
import "../styles/fonts.css";
import "../styles/scss/styles.scss";
import "../styles/scss/footer.scss";
import { Link } from "react-router-dom";
import Carrossel from "../components/Carrossel";
import ScrollTriggerC from "../components/animations/ScrollTrigger";
import Second from "../components/animations/Second";
function Home() {
  return (
    <div className="home">
      <div className="first">
        <div className="left">
          <h1>Guilherme Pontifice</h1>
          <p>Guarulhos, São Paulo</p>
          <p id="disponivel">Open to Work</p>
        </div>
        <div className="center"></div>
        <div className="right">
          <h1>Desenvolvedor Front-End</h1>
        </div>
      </div>
      <Second />
      <div className="second">
        <div className="texto">
          <p>
            Sou Desenvolvedor Front-End com foco na criação de interfaces
            modernas, acessíveis e com alta performance. Trabalho com
            <span> JavaScript</span>, <span>React</span>, <span>Vue</span>,{" "}
            <span>TypeScript</span> e frameworks de estilização como
            <span>TailwindCSS</span> e <span>SCSS</span>, sempre buscando
            escrever um código limpo, reutilizável e escalável.
          </p>
          <p>
            Tenho experiência na integração com <span>APIs RESTful</span>,
            aplicação de boas práticas de acessibilidade (WCAG), otimização para{" "}
            <span>Core Web Vitals</span> e uso de ferramentas como Google
            Lighthouse, Search Console e Google Analytics para melhorar a
            experiência do usuário e o desempenho das aplicações.
          </p>
          <p>
            Valorizo a colaboração em times multidisciplinares, o uso de{" "}
            <span>Git</span>
            para versionamento e a adoção de testes automatizados com Jest para
            garantir a qualidade e a estabilidade do código.
          </p>
        </div>

        <div className="botao">
          <Link to="/sobre" className="animated-link">
            <div className="circle"></div>
            <div className="text-wrapper">
              <span className="text text-top">Saiba Mais!</span>
              <span className="text text-bottom">Saiba Mais!</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="third">
        <div className="divisoria"></div>
        <div className="texto">
          <h2>Minha expertise</h2>
          <p>Confira algumas de minhas tecnologias</p>
        </div>
        <div className="divisoria"></div>
      </div>
      {/* <ScrollTriggerC /> */}
      <div className="fourth">
        <Carrossel />
      </div>
    </div>
  );
}

export default Home;
