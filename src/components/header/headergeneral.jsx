import React from 'react';
import { useHeadergeneral } from './useHeadergeneral';
import './headergeneral.css';

export const HeaderGeneral = ({ activeSection, onNavigate }) => {
  const { isMenuOpen, isScrolled, toggleMenu, closeMenu } = useHeadergeneral();
  const handleNavigation = (event, section) => {
    event.preventDefault();
    onNavigate(section);
    closeMenu();
  };

  return (
    <header className={`site-header ${isScrolled ? 'site-header--scrolled' : ''}`}>
      <div className="container header-container">
        {/* Identificador / Logotipo */}
        <div className="header-brand">
          <a href="#presentacion" className="brand-link" onClick={(event) => handleNavigation(event, 'presentacion')} aria-label="Página de inicio">
            <span className="brand-primary">Tax</span>
            <span className="brand-dark">Manager</span>
          </a>
        </div>

        {/* Botón menú móvil (hamburguesa) */}
        <button
          type="button"
          className={`menu-toggle ${isMenuOpen ? 'menu-toggle--active' : ''}`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Cerrar navegación' : 'Abrir navegación'}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
        >
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
        </button>

        {/* Navegación a las 3 secciones requeridas */}
        <nav
          id="primary-navigation"
          className={`header-nav ${isMenuOpen ? 'header-nav--open' : ''}`}
          aria-label="Navegación principal"
        >
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#presentacion" className={`nav-link ${activeSection === 'presentacion' ? 'nav-link--active' : ''}`} onClick={(event) => handleNavigation(event, 'presentacion')}>
                Presentación
              </a>
            </li>
            <li className="nav-item">
              <a href="#funcionalidades" className={`nav-link ${activeSection === 'funcionalidades' ? 'nav-link--active' : ''}`} onClick={(event) => handleNavigation(event, 'funcionalidades')}>
                Alcance & Declaración
              </a>
            </li>
            <li className="nav-item nav-item--cta">
              <a href="#buzon-ideas" className="btn-cta" onClick={(event) => handleNavigation(event, 'buzon-ideas')}>
                Aportar ideas
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};