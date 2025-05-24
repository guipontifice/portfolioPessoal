import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/fonts.css";
import "../styles/scss/header.scss";

function Header() {
  const [paginaAtiva, setPaginaAtiva] = useState("Home");

  const location = useLocation();
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowHeader(currentScrollY < lastScrollY || currentScrollY <= 0);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Trabalho", path: "/trabalho" },
    { label: "Sobre Mim", path: "/sobre" },
  ];

  return (
    <header className={`header ${showHeader ? "show" : "hide"}`}>
      <nav className="menu">
        <Link to="/" id="nome">
          Guilherme Pontifice
        </Link>
        <ul className="nav">
          {menuItems.map((item) => (
            <li key={item.path} className="nav-item">
              <Link
                to={item.path}
                className={`animated-link ${
                  paginaAtiva === item.label ? "active" : ""
                }`}
                onClick={() => setPaginaAtiva(item.label)}
              >
                <div className="text-wrapper">
                  <span className="text text-top">{item.label}</span>
                  <span className="text text-bottom">{item.label}</span>
                </div>
                {paginaAtiva === item.label && <div className="circle" />}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
