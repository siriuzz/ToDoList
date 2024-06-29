import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from '@/app/page';

describe('added Task', () => {
    it('renders a heading', () => {
        render(<Home />);
  
        const p = screen.getByText('Todo List');
        expect(p).toBeInTheDocument();

        const input = screen.getByPlaceholderText('Insert text');
        const addButton = screen.getByText('Add Note');

        // Add a task
        fireEvent.change(input, { target: { value: 'Test Task 1' } });
        fireEvent.click(addButton);

        // Verify the task is added
        expect(screen.getByText('Test Task 1')).toBeInTheDocument();
    });
});
