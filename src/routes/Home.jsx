import React, { useState, useEffect } from "react";
import "../styles/fonts.css";
import "../styles/scss/styles.scss";
import "../styles/scss/footer.scss";
import { Link } from "react-router-dom";
import Carrossel from '../components/Carrossel'
function Home() {
  return (
    <div className="home">
      <div className="first">
        <div className="left">
          <h1>Guilherme Pontifice</h1>
          <p>Guarulhos, São Paulo</p>
          <p>Open to Work</p>
        </div>
        <div className="center"></div>
        <div className="right">
          <h1>Desenvolvedor Front-End</h1>
        </div>
      </div>
      <div className="second">
        <div className="texto">
          <p>
            Sou um Desenvolvedor Front-End com experiência comprovada desde
            Junho de 2024. No meu dia a dia na empresa, utilizo principalmente
            <span> JavaScript</span> e <span>PHP</span>. Mas anteriormente, já
            estudei outras linguagens para me aperfeiçoar como profissional,
            como por exemplo <span>TypeScript</span>.
          </p>
        </div>
        <div className="botao">
          <div className="circle"></div>
          <Link to="/sobre" data-hover="Saiba Mais!">
            Saiba Mais!
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
      <div className="fourth">
        <Carrossel />
      </div>
    </div>
  );
}

export default Home;
