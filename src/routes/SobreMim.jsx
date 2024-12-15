import React from "react";
import "../styles/fonts.css";
import "../styles/scss/styles.scss";
import "../styles/scss/footer.scss";
import { Link } from "react-router-dom";

function SobreMim() {
  return (
    <>
      <div className="second">
        <div className="texto">
          <h1>Olá</h1>
          <p>
            Olá, me chamo Guilherme, sou um Desenvolvedor Front-end há 1 ano.
            Utilizo marjoritariamente TypeScript, JavaScript, PHP e React.
            Contribuí em projetos de diversos tamanhos, fortalecendo não apenas
            meu conhecimento, mas também compartilhando aprendizados com a
            equipe. Sou comprometido, focado e inovador, buscando constantemente
            aprimorar minhas habilidades através de cursos e bootcamps online.
          </p>
        </div>
        <div className="botao">
          <div className="circle"></div>
          <Link to="/sobre" data-hover="Saiba Mais!">
            Saiba Mais!
          </Link>
        </div>
      </div>
    </>
  );
}

export default SobreMim;
