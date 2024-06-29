// AddButton.test.js
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import AddButton from '@/app/components/AddButton';

describe('AddButton', () => {
  it('renders the button', () => {
    render(<AddButton action={() => { }} />);

    const button = screen.getByText('Add Note');
    expect(button).toBeInTheDocument();
  });

  it('calls the action when the button is clicked', () => {
    const action = jest.fn();
    render(<AddButton action={action} />);

    const button = screen.getByText('Add Note');
    fireEvent.click(button);

    expect(action).toHaveBeenCalledTimes(1);
  });
});
