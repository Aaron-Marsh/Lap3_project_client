import { getByLabelText, getByRole, screen } from '@testing-library/react';
import NotFound from './index';
import {BrowserRouter as Router} from 'react-router-dom';


describe('Question', () => {
    beforeEach(() => {
        render(<Router><NotFound /></Router>)
    })
    test("go back to main page message", () => {
        screen.getByText(/go back to main page/i)
    });

    test("not found message", () => {
        screen.getByText(/not found/i)
    });


})



