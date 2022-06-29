
import Setup from './index';
import { getByLabelText, getByRole, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux'
import store from '../../redux/store';
import {BrowserRouter as Router} from 'react-router-dom';

describe('Setup', () => {
    beforeEach(() => {
        render(<Provider store={store}> <Router><Setup></Setup></Router></Provider>);
    });
    test('button role', () => {
        screen.getByRole('button', { name: /start quiz/i
          })
       
      });

      test('heading', () => {
        screen.getByRole('heading', {
            name: /start a new game/i
          })
       
      });
      test('img', () => {
        screen.getByRole('img')
       
      });
 
    });
    
