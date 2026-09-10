import React from 'react';
import { useFooter } from './useFooter';
import './footer.css';

export const Footer = () => {
  const { currentYear, developerInfo, navLinks } = useFooter();

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        
        {/* Columna 1: Marca y Propósito */}
        <div className="footer-col footer-col--brand">
          <div className="footer-brand">
            <span className="brand-primary">Tax</span>
            <span className="brand-light">Manager</span>
          </div>
          <p className="footer-description">
            Plataforma integral de gestión financiera y liquidación automatizada de rentas bajo arquitectura distribuida.
          </p>
        </div>

        {/* Columna 2: Enlaces Rápidos */}
        <div className="footer-col">
          <h4 className="footer-title">Navegación</h4>
          <ul className="footer-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="footer-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 3: Arquitectura & Contacto */}
        <div className="footer-col">
          <h4 className="footer-title">Tecnología</h4>
          <ul className="footer-list">
            <li><span className="footer-static-item">Microservicios API</span></li>
            <li><span className="footer-static-item">Motor de Cálculo Fiscal</span></li>
            <li><span className="footer-static-item">Seguridad & Encriptación</span></li>
          </ul>
        </div>

      </div>

      {/* Barra Inferior de Créditos */}
      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p className="footer-copy">
            &copy; {currentYear} TaxManager. Todos los derechos reservados.
          </p>
          <div className="footer-credits">
            <span>Desarrollado por </span>
            <a 
              href={developerInfo.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="developer-link"
              aria-label="Perfil de GitHub de Esteban Rubiano"
            >
              {developerInfo.name}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};