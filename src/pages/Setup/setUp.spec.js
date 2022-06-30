import Setup from './index';
import {
  getByLabelText,
  getByRole,
  screen,
  render,
  fireEvent,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('Setup', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        {' '}
        <Router>
          <Setup></Setup>
        </Router>
      </Provider>
    );
  });
  test('button role', () => {
    screen.getByRole('button', { name: /start quiz/i });
  });

  test('heading', () => {
    screen.getByRole('heading', {
      name: /start a new game/i,
    });
  });
  test('img', () => {
    screen.getByRole('img');
  });

  test('onSubmit calls a  prop when clicked', () => {
    const onSubmit = jest.fn();
    render(
      <Provider store={store}>
        {' '}
        <Router>
          <Setup></Setup>
        </Router>
      </Provider>
    );
    let form = screen.getAllByRole('form');
    fireEvent.click(getByRole('form'));
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
