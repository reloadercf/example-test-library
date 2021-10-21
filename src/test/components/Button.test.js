import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../../components/Button';

test('button has correct initial color', () => {
render( <Button />);

// find an element with a role
const colorButton= screen.getByRole('button', {name: 'Change to blue'})

// expect the background color tobe red
expect(colorButton).toHaveStyle({ backgroundColor: 'red'})

// Clickbutton
fireEvent.click(colorButton)

// expect the background color to be blue
expect(colorButton).toHaveStyle({ backgroundColor: 'blue'})

// expect the button text to be 'change to red'
expect(colorButton.textContent).toBe('Change to red')
}) 
