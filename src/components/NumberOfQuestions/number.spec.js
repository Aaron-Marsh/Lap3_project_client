import NumberOfQuestions from './index.js';
import { screen } from '@testing-library/react';
import { Provider } from 'react-redux'
import store from '../../redux/store';


describe('NumberOfQuestions', () => {
  beforeEach(() => {
    render(<Provider store={store}><NumberOfQuestions></NumberOfQuestions></Provider>);
  });

  test('input label text-field', () => {
    const input = screen.getByLabelText("Number of questions");
    expect(input).toBeInTheDocument();
  });

  test('input attribute text-field', () => {
    expect(input).toHaveAttribute("type", "number");
  });

//onchange test
  
});



