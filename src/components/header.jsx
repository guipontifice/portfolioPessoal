import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import gsap from "gsap";
import TransitionOverlay from "./animations/TransitionOverlay";
import "../styles/fonts.css";
import "../styles/scss/header.scss";

function Header() {
  const [paginaAtiva, setPaginaAtiva] = useState("Home");
  const location = useLocation();
  const navigate = useNavigate();
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [nextRoute, setNextRoute] = useState("");

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

  const handleNavigation = (label, path) => (e) => {
    e.preventDefault();
    if (path === location.pathname) return; // evita transição se já está na página
    setPaginaAtiva(label);
    setNextRoute(path);
    setTransitioning(true);
  };
  const handleOverlayComplete = () => {
    navigate(nextRoute);
  };
  return (
    <>
      {transitioning && (
        <TransitionOverlay
          onMidTransition={() => {
            navigate(nextRoute); // navega para a nova página
            setTimeout(() => {
              setTransitioning(false); // só destrói o overlay depois de um tempo
            }, 200); // igual ao tempo da animação de saída
          }}
        />
      )}

      <header className={`header ${showHeader ? "show" : "hide"}`}>
        <nav className="menu">
          <Link
            to="/"
            id="nome"
            className="animated-link nome-link"
            onClick={handleNavigation("Home", "/")}
          >
            <div className="text-wrapper">
              <span className="text text-top">Guilherme Pontifice</span>
              <span className="text text-bottom">Guilherme Pontifice</span>
            </div>
          </Link>
          <ul className="nav">
            {menuItems.map((item) => (
              <li key={item.path} className="nav-item">
                <Link
                  to={item.path}
                  className={`animated-link ${
                    paginaAtiva === item.label ? "active" : ""
                  }`}
                  onClick={handleNavigation(item.label, item.path)} // ← aqui está o ajuste
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
    </>
  );
}

export default Header;
