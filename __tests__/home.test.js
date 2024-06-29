import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';



describe('Home', () => {
    it('renders a heading', () => {
        render(<Home />)

        const p = screen.getByText('Todo List')

        expect(p).toBeInTheDocument()
    })
})