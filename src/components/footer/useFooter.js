export const useFooter = () => {
  const currentYear = new Date().getFullYear();

  const developerInfo = {
    name: 'Esteban Rubiano',
    github: 'https://github.com/EstebanRubiano',
  };

  const navLinks = [
    { label: 'Presentación', href: '#presentacion' },
    { label: 'Alcance & Declaración', href: '#funcionalidades' },
    { label: 'Buzón de Ideas', href: '#buzon-ideas' }
  ];

  return {
    currentYear,
    developerInfo,
    navLinks
  };
};