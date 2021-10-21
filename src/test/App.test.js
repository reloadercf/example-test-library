import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

beforeEach(() => render(<App />));



test('Component App', () =>{
    // before click
    const contentEmail= screen.getByPlaceholderText('email')
    const contentPass= screen.getByPlaceholderText('password')
    const contentSubmit= screen.getByRole('button', { name: /Iniciar Sesion/i })
    
    expect(contentEmail).toBeInTheDocument();
    expect(contentPass).toBeInTheDocument();
    expect(contentSubmit).toBeInTheDocument();

    fireEvent.submit(contentSubmit);
    // After click 
    expect(contentEmail).not.toBeInTheDocument();
    
    const titleByRole= screen.getByRole('heading', {level: 1})
    const titleByText= screen.getByText('Bienvenida');

    expect(titleByRole).toBeInTheDocument();
    expect(titleByText).toBeInTheDocument();
});