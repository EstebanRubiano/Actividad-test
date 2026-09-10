/**
 * TEST: Navegación
 * Verifica que al hacer clic en un botón, la página cambia.
 */
import { beforeEach, describe, it, expect } from 'vitest';
import { render, screen, fireEvent, within } from '@testing-library/react';
import App from '../../app';

beforeEach(() => {
  window.history.replaceState({}, '', '#presentacion');
});

describe('Navegacion', () => {
  it('muestra solo la sección seleccionada en el navbar', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: /automatización fiscal/i })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /capacidades del sistema/i })).not.toBeInTheDocument();

    const headerNavigation = within(screen.getByRole('navigation', { name: 'Navegación principal' }));
    fireEvent.click(headerNavigation.getByRole('link', { name: 'Alcance & Declaración' }));

    expect(screen.getByRole('heading', { name: /capacidades del sistema/i })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /automatización fiscal/i })).not.toBeInTheDocument();
  });
});
