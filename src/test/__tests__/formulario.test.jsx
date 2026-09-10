/**
 * TEST: Formulario
 * Verifica que si se envia el formulario vacio, aparecen errores de validacion.
 */
import { beforeEach, describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../../app';

beforeEach(() => {
  window.history.replaceState({}, '', '#presentacion');
});

describe('Formulario', () => {
  it('muestra un error al enviar la idea sin completar campos obligatorios', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('link', { name: 'Aportar ideas' }));

    fireEvent.submit(screen.getByRole('button', { name: /enviar idea/i }).closest('form'));

    expect(screen.getByText('Por favor complete todos los campos obligatorios (*).')).toBeInTheDocument();
  });
});
