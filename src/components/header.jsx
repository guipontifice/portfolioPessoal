import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
  const [transitionTitle, setTransitionTitle] = useState(""); // Novo estado para o título da transição

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
    if (path === location.pathname) return;
    setPaginaAtiva(label);
    setNextRoute(path);
    setTransitionTitle(label); // Define o título para a transição
    setTransitioning(true);
  };

  const handleOverlayReadyForNavigation = () => {
    navigate(nextRoute);
  };

  const handleOverlayAnimationComplete = () => {
    setTransitioning(false);
    setTransitionTitle(""); // Limpa o título após a transição
  };

  return (
    <>
      {transitioning && (
        <TransitionOverlay
          onOverlayReadyForNavigation={handleOverlayReadyForNavigation}
          onCompleteTransition={handleOverlayAnimationComplete}
        >
          {transitionTitle} {/* Passa o título como children */}
        </TransitionOverlay>
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
                  onClick={handleNavigation(item.label, item.path)}
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