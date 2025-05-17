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
            Olá, me chamo Guilherme, sou um Desenvolvedor Front-end com mais de
            1 ano de experiência na criação e otimização de interfaces web
            responsivas, acessíveis e de alta performance. Possuo sólida
            experiência com Vue, React, Angular, JavaScript, TypeScript, PHP e
            Node.js, atuando com foco em usabilidade, SEO, boas práticas de
            código e melhoria contínua.
          </p>
          <p>
            Sou comprometido com a entrega de soluções escaláveis e eficientes,
            participando ativamente do desenvolvimento, refatoração e manutenção
            de projetos diversos no setor de marketing digital. Tenho facilidade
            para colaborar com equipes multidisciplinares, aplicando
            metodologias ágeis e versionamento com Git.
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
