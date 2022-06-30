import CreateQuiz from './index';
import {
 
screen
} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';

describe('CreateQuiz', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <CreateQuiz></CreateQuiz>
      </Provider>
    );
  });

  test('label to exsist', () => {
    screen.findAllByText(/\{label\}/i);
  });
});
