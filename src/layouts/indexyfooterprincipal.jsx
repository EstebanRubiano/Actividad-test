// src/layouts/indexyfooterprincipal.jsx
import React from 'react';
import { HeaderGeneral } from '../components/header/headergeneral';
import { Footer } from '../components/footer/footer';

export const IndexYFooterPrincipal = ({ children, activeSection, onNavigate }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <HeaderGeneral activeSection={activeSection} onNavigate={onNavigate} />
      <main id="main-content" style={{ flex: '1 0 auto', width: '100%' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default IndexYFooterPrincipal;