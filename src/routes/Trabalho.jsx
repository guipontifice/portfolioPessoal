import React from "react";

function Trabalho() {
  return (
    <div className="trabalho">
      <div className="cards">
        <div className="card card1">
          <h1>Desenvolvedor Front-End</h1>
          <h2>Yaslip</h2>
          <h3>Jun/24 - Atualmente</h3>
          <p>
            Responsável por reestruturar e manter 14 sites com foco em
            performance, acessibilidade (WCAG) e SEO técnico. Atuei utilizando{" "}
            <span>JavaScript (ES6+)</span> e <span>TypeScript</span> em
            aplicações desenvolvidas com <span>React</span> e{" "}
            <span>Next.js</span>, garantindo SSR, otimização de imagens e
            roteamento eficiente. Trabalhei também com <span>PHP</span> em
            sistemas legados e na integração de funcionalidades dinâmicas.
            Realizei análises de performance com <span>Google Lighthouse</span>,{" "}
            <span>Search Console</span> e <span>Google Analytics</span>,
            identificando gargalos e aplicando otimizações com foco nos Core Web
            Vitals. Implementei <span>versionamento com Git</span>, integração
            com <span>APIs RESTful</span> e<span>CMSs personalizados</span> para
            facilitar a gestão de conteúdo.{" "}
            <span>
              Resultados: aumento das métricas Core Web Vitals (LCP e FID) de
              30–50 para 90–100, com ganho real em tempo de carregamento,
              ranqueamento orgânico e experiência do usuário.
            </span>
          </p>
          <div className="techs"></div>
        </div>
        <div className="card card2">
          <h1>Desenvolvedor Front-End</h1>
          <h2>Freelancer</h2>
          <h3>Jul/23 - Maio/24</h3>
          <p>
            Como Desenvolvedor Front-End, foco na criação de interfaces
            modernas, acessíveis e de alta performance. Utilizo JavaScript
            (ES6+), TypeScript, React e Next.js para construir aplicações web
            escaláveis, com renderização eficiente (SSR/SSG), roteamento
            otimizado e boas práticas de UX/UI. No back-end, trabalho com
            Node.js e APIs RESTful, garantindo integrações robustas e seguras.
            Adoto Testes Automatizados com Jest, versionamento com Git em
            ambientes colaborativos e práticas de segurança desde as etapas
            iniciais do desenvolvimento. Minha prioridade é entregar soluções
            com código limpo, modular e sustentável — que proporcionem uma
            excelente experiência para o usuário final e facilidade de
            manutenção para o time.
          </p>
          <div className="techs"></div>
        </div>
      </div>
    </div>
  );
}

export default Trabalho;
