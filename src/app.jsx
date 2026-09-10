import React, { useEffect, useState } from 'react';
import { IndexYFooterPrincipal } from './layouts/indexyfooterprincipal';
import { Home } from './views/home/home';

export const App = () => {
  const validSections = ['presentacion', 'funcionalidades', 'buzon-ideas'];
  const getSectionFromHash = () => {
    const sectionFromHash = window.location.hash.replace('#', '');
    return validSections.includes(sectionFromHash) ? sectionFromHash : 'presentacion';
  };
  const [activeSection, setActiveSection] = useState(getSectionFromHash);

  useEffect(() => {
    const handleHashChange = () => setActiveSection(getSectionFromHash());
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  const navigateToSection = (section) => {
    setActiveSection(section);
    window.history.pushState({}, '', `#${section}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <IndexYFooterPrincipal activeSection={activeSection} onNavigate={navigateToSection}>
      <Home activeSection={activeSection} onNavigate={navigateToSection} />
    </IndexYFooterPrincipal>
  );
};

export default App;