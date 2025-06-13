import React from "react";
import { Link } from "react-router-dom";


function Footer() {
  const data = new Date();
  const ano = data.getFullYear();


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
              <Link to="/sobre" className="animated-link">
                <div className="circle"></div>
                <div className="text-wrapper">
                  <span className="text text-top">Linkedin</span>
                  <span className="text text-bottom">Linkedin</span>
                </div>
              </Link>
            </div>


            <div className="botao">
              <Link to="/sobre" className="animated-link">
                <div className="circle"></div>
                <div className="text-wrapper">
                  <span className="text text-top">Download CV</span>
                  <span className="text text-bottom">Download CV</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bottomRowFooter">
        <p>&copy;{` ${ano} Direitos Reservados`}</p>
        <p id="disponivel">Em busca de uma nova oportunidade</p>
        <p>Feito por Guilherme</p>
      </div>
    </div>
  );
}


export default Footer;
