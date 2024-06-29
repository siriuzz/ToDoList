import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from '@/app/page';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const p = screen.getByText('Todo List');
    expect(p).toBeInTheDocument();
  });

  it('deletes a task when the delete button is clicked', () => {
    render(<Home />);
    
    const input = screen.getByPlaceholderText('Insert text');
    const addButton = screen.getByText('Add Task');

    // Add a task
    fireEvent.change(input, { target: { value: 'Test Task 1' } });
    fireEvent.click(addButton);

    // Verify the task is added
    expect(screen.getByText('Test Task 1')).toBeInTheDocument();

    // Delete the task
    const deleteButton = screen.getByText('Delete');
    fireEvent.click(deleteButton);

    // Verify the task is removed
    expect(screen.queryByText('Test Task 1')).not.toBeInTheDocument();
  });

  it('Shows empty task warning', () => {
    render(<Home />);
    
    const addButton = screen.getByText('Add Task');

    // Add a task
    fireEvent.click(addButton);

    // Verify the task is added
    expect(screen.getByText('Task is empty. Please, add a name to the task.')).toBeInTheDocument();
  });
});
