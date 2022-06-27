import { Welcome } from '../index';
import { render, screen } from '@testing-library/react';

describe('Welcome', () => {
    beforeEach(() => { render(<Welcome />)});
    
    test('it renders the title', () => {
        const heading = screen.getByRole('heading', {
            name:'heading' })
        
        expect(heading.textContent).toBe('Welcome Page');
    });
})
