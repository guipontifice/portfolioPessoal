import React from "react";
import "../styles/fonts.css";
import "../styles/scss/styles.scss";
import "../styles/scss/footer.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function SobreMim() {
  const element = (
    <FontAwesomeIcon
      icon={faArrowRight}
      style={{ color: "#fb4566", margin: "0 10px 0 0" }}
    />
  );

  return (
    <>
      <div className="sobre-mim">
        <div className="section-1">
          <div className="imagem"></div>
          <div className="texto">
            <h1>
              Crio soluções com algoritmos, estrutura de dados e código limpo
            </h1>
            <p>
              Me chamo Guilherme, Desenvolvedor Front-End com paixão por criar
              experiências digitais acessíveis, performáticas e visualmente bem
              resolvidas. Minha relação com a tecnologia começou cedo, ainda no
              ensino fundamental, quando tive meu primeiro contato com
              programação. No ensino médio, aprofundei esse interesse ao cursar
              Técnico em Informática, e embora tenha seguido outros caminhos por
              um tempo, foi essa paixão duradoura que me trouxe de volta à área
              — agora com muito mais foco e maturidade .
            </p>
            <p>
              Atualmente curso Análise e Desenvolvimento de Sistemas e atuo como
              Desenvolvedor Front-End, contribuindo em projetos diversos no
              setor de marketing digital. Trabalho com tecnologias como
              <span>JavaScript</span>, <span>TypeScript</span>,{" "}
              <span>React</span> e <span>NextJS</span>, sempre com atenção
              especial a performance, acessibilidade (WCAG), SEO e boas práticas
              de código. Tenho experiência com testes em <span>Jest</span>,
              integração com APIs e otimizações que impactam diretamente a
              experiência do usuário e os Core Web Vitals. Sou colaborativo,
              orientado a entregas de qualidade, e acredito que código bem
              estruturado, com base sólida em algoritmos e lógica, é o que
              transforma ideias em soluções reais.
            </p>
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
        </div>
        <div className="divisoria">
          <h2>Sobre</h2>
          <div className="linha"></div>
        </div>
        <div className="habilidades">
          <h2>Habilidades</h2>
          <div className="boxes">
            <div className="box box1">
              <h2>Desenvolvimento Frontend</h2>
              <ul>
                <li>React & Vue</li>
                <li>TypeScript & JavaScript</li>
                <li>Consumo de APIs REST </li>
                <li>Testes Unitários com Jest</li>
              </ul>
            </div>
            <div className="box box2">
              <h2>Performance & Acessibilidade</h2>
              <ul>
                <li>Core Web Vitals (Lighthouse)</li>
                <li>Boas práticas WCAG</li>
                <li>SEO Técnico (Search Console)</li>
                <li>UX/UI</li>
              </ul>
            </div>
            <div className="box box3">
              <h2>Lógica e Estrutura de Dados</h2>
              <ul>
                <li>Algoritmos otimizados</li>
                <li>Estruturas clássicas (listas, pilhas, árvores)</li>
                <li>Resolução de problemas</li>
                <li>Organização e legibilidade do código</li>
              </ul>
            </div>
            <div className="box box4">
              <h2>Colaboração e Produto</h2>
              <ul>
                <li>Integração com Design e Marketing</li>
                <li>Documentação e Git</li>
                <li>Metodologias Ágeis (Scrum)</li>
                <li>Foco em entregas com valor real</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="ferramentas">
          <div className="divisoria">
            <h2>Sobre</h2>
            <div className="linha"></div>
          </div>
          <div className="texto">
            <h2>Ferramentas</h2>
            <div className="linguagens">
              <span>JavaScript</span>
              <span>TypeScript</span>
              <span>React</span>
              <span>NextJS</span>
              <span>GIT</span>
              <span>Jest</span>
              <span>NodeJS</span>
              <span>Figma</span>
              <span>SCSS</span>
              <span>TailwindCSS</span>
            </div>
          </div>
        </div>
        <div className="experiencia">
          <div className="divisoria">
            <h2>Sobre</h2>
            <div className="linha"></div>
          </div>
          <div className="texto">
            <h2>Experiência</h2>
            <div className="trabalhos">
              <div className="direita">
                <div className="linha">
                  <div className="titulo">
                    <h3>Desenvolvedor Frontend</h3>
                    <span>@Yaslip</span>
                  </div>
                  <div className="data">
                    <span>Jun.2024</span>
                    {element}
                    <span>Atualmente</span>
                  </div>
                </div>

                <div className="linha">
                  <div className="titulo">
                    <h3>Desenvolvedor Frontend</h3>
                    <span>@Freelancer</span>
                  </div>
                  <div className="data">
                    <span>Mai.2023</span>
                    {element}
                    <span>&rarr;</span>
                    <span>Jun.2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SobreMim;
