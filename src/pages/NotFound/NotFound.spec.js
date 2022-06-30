import { getByLabelText, getByRole, screen } from '@testing-library/react';
import NotFound from './index';
import {BrowserRouter as Router} from 'react-router-dom';


describe('Question', () => {
    beforeEach(() => {
        render(<Router><NotFound /></Router>)
    })
    test("go back to main page message", () => {
        screen.getByRole('heading', {
            name: /whoops! seems like you may be lost, click the link to go back to main page/i
          })
    });

    test("list elements", () => {
        screen.getByRole('list')
    });


})



