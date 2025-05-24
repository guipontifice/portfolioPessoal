import React from "react";
import "../styles/fonts.css";
import "../styles/scss/styles.scss";
import "../styles/scss/footer.scss";
import { Link } from "react-router-dom";

function SobreMim() {
  return (
    <>
      <div className="sobre-mim">
        <div className="texto">
          <h1>Olá</h1>
          <p>
            Me chamo Guilherme Pontifice e sou Desenvolvedor Front-End com forte
            paixão por criar experiências digitais que unam performance,
            acessibilidade e estética. Minha jornada com tecnologia começou
            cedo, ainda no ensino fundamental, quando tive minhas primeiras
            aulas de programação. Foi ali que percebi não só uma afinidade
            natural com lógica, mas também um entusiasmo genuíno por construir
            coisas com código — o tipo de entusiasmo que transforma curiosidade
            em propósito.
          </p>
          <p>
            No ensino médio, aprofundei esse interesse ao cursar Técnico em
            Informática. Durante esse período, desenvolvi uma base sólida em
            fundamentos da computação, redes, manutenção e desenvolvimento web.
            Ainda assim, após a conclusão do curso, acabei trilhando outros
            caminhos por um tempo. No entanto, a tecnologia nunca deixou de me
            atrair — e foi essa paixão que me fez retornar de forma definitiva à
            área, agora com muito mais foco e maturidade.
          </p>
          <p>
            Em 2024, iniciei minha graduação em Análise e Desenvolvimento de
            Sistemas, com o objetivo de consolidar meus conhecimentos e me
            preparar para desafios cada vez maiores. Desde então, venho me
            dedicando intensamente à prática profissional e ao aprimoramento
            contínuo, buscando sempre alinhar teoria, técnica e visão de
            produto.
          </p>
          <p>
            Atualmente, atuo como Desenvolvedor Front-End na Yaslip, onde há
            mais de um ano participo ativamente da criação, otimização e
            manutenção de interfaces web para diversos projetos no setor de
            marketing digital. Meu dia a dia envolve tecnologias como
            JavaScript, TypeScript, Vue, React, Angular e Node.js, além do uso
            de ferramentas modernas para SEO (como Google Lighthouse, Search
            Console e Analytics), testes automatizados (Jest), versionamento com
            Git e integração com APIs.
          </p>
          <p>
            Entre meus principais focos estão a performance de carregamento,
            acessibilidade conforme diretrizes WCAG, e a construção de código
            limpo e reutilizável. Já tive a oportunidade de otimizar páginas que
            saltaram de 30–50 para 90–100 em métricas do Core Web Vitals,
            resultando em melhor ranqueamento e experiência do usuário.
          </p>
          <p>
            Sou uma pessoa comprometida com entregas bem feitas, colaborativa no
            trabalho em equipe, e que acredita no poder da tecnologia como
            ferramenta para resolver problemas reais. Tenho facilidade em me
            comunicar com áreas como design, produto e marketing, e encaro cada
            projeto como uma chance de aprender algo novo e contribuir com
            soluções de impacto.
          </p>
          <p>
            Se você busca alguém que alia base técnica, vontade de crescer e um
            olhar genuíno por qualidade e usabilidade, será um prazer trocarmos
            uma ideia!
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
    </>
  );
}

export default SobreMim;
