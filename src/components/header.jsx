import React, { useState } from "react";
import { Link } from 'react-router-dom'
import '../styles/fonts.css'
import "../styles/scss/header.scss";

function Header() {
  const [paginaAtiva, setPaginaAtiva] = useState("Home");
  return (
    <header>
      <div className="menu">
        <Link to="/" id="nome">Guilherme Pontifice</Link>
        <div className="nav">
          <p>
            <Link 
              to="/"
              className={paginaAtiva === "Home" ? "active" : ""}
              onClick={() => {
                () => setPaginaAtiva("Home");
              }}
            >
              Home
            </Link>
          </p>
          <p>
            <Link
              to="/trabalho"
              className={paginaAtiva === "Trabalho" ? "active" : ""}
              onClick={() => {
                () => setPaginaAtiva("Trabalho");
              }}
            >
              Trabalho
            </Link>
          </p>
          <p>
            <Link 
            to="/sobre"
            className={paginaAtiva === "Sobre" ? "active" : ""}
              onClick={() => {
                () => setPaginaAtiva("Sobre");
              }}
            >Sobre Mim</Link>
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
