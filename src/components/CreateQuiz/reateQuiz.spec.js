import CreateQuiz from './index';
import { getByLabelText, getByRole, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux'
import store from '../../redux/store';

describe('NumberOfQuestions', () => {
    beforeEach(() => {
      render(<Provider store={store}><CreateQuiz></CreateQuiz></Provider>);
    });
  
    
      test('input attribute text-field', () => {
        screen.getByRole('combobox'), { target: { value: {id} } };
      });
    
    //onchange test
      
    });
    