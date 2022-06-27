import { Welcome } from '../index';
import { Setup } from '../index';
import { render, screen } from '@testing-library/react';

describe('Welcome', () => {
    beforeEach(() => { render(<Welcome />)});
    
    test('it renders the title', () => {
        const heading = screen.getByRole('heading', {
            name:'heading' })
        
        expect(heading.textContent).toBe('Welcome Page');
    });

    test('it renders a button', () => {
        let button = screen.getByRole('setup','help');
        expect(button).toBeInTheDocument();
    });

    test('it should go to the setup page', () => {
    Object.defineProperty(window, 'location', {
        get() {
        return { href: '/setup' };
        },
    });
    render(<Setup />);
    });
})
