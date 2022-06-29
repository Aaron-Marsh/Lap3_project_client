import CreateQuiz from './index';
import {
  getByLabelText,
  getByRole,
  screen,
  fireEvent,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';

describe('CreateQuiz', () => {
  beforeEach(() => {
    const { getByTestId, getAllByTestId } = render(
      <Provider store={store}>
        <CreateQuiz></CreateQuiz>
      </Provider>
    );
  });

  test('input attribute text-field', () => {
    screen.findAllByText(/\{label\}/i)
  });


});
