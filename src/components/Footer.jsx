import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="caixa">
        <div className="titulo">
          <h2>Procurando por um novo talento?</h2>
        </div>
        <div className="texto">
          <a href="">guilhermepontifice.gp@gmail.com</a>
          <div className="links">
          <div className="botao">
          <div className="circle"></div>
          <Link to="/sobre" data-hover="Linkedin">
            Linkedin
          </Link>
        </div>
        <div className="botao">
          <div className="circle"></div>
          <Link to="/sobre" data-hover="Download CV">
            Download CV
          </Link>
        </div>
          </div>
        </div>
      </div>
      <div className="bottomRowFooter">
        <p>2024 Guilherme Pontifice</p>
        <p>Disponível</p>
        <p>Feito por Guilherme Pontifice</p>
      </div>
    </div>
  );
}

export default Footer;
