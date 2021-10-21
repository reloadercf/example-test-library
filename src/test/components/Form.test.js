import { render, screen, fireEvent } from '@testing-library/react';
import Form from '../../components/Form';

test('Component Form', () =>{
    const handleLogin = jest.fn();
    const handleFake = jest.fn();
    render(<Form handleLogin={handleLogin} />);
    const contentSubmit= screen.getByRole('button', { name: /Iniciar Sesion/i })

    expect(contentSubmit).toBeInTheDocument();

    fireEvent.submit(contentSubmit);

    expect(handleLogin).toHaveBeenCalled();
    expect(handleFake).not.toHaveBeenCalled();;
});