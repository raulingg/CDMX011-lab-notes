import { render, screen } from '@testing-library/react'
import  Home from './Home';

describe('Home se renderiza con los elementos necesarios', () => {
  it('Home incluye un h1 con el texto "labnotes"', () => {
    render(<Home />)
    expect(screen.getByRole('heading', {name:/labnotes/i})).toBeInTheDocument();
  })
  it('Home incluye un botón con el texto "iniciar sesión"', () => {
    render(<Home />)
    expect(screen.getByRole('button', {name:/iniciar sesión/i})).toBeInTheDocument();
  })
  it('Home incluye un botón con el texto "regístrarme"', () => {
    render(<Home />)
    expect(screen.getByRole('button', {name:/regístrarme/i})).toBeInTheDocument();
  })   
});
