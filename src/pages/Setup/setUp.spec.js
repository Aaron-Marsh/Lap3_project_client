import Setup from './index';
import {
  getByLabelText,
  getByRole,
  screen,
  render,
  fireEvent,
  waitForElement,
  getByTestId,
  cleanup,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

afterEach(cleanup);
describe('Setup', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        {' '}
        <Router>
          <Setup />
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
    userEvent.click(screen.getAllByTestId('custom-element')[0]);
  });

  it('categories to not be null, to be defined, to have been called 0 times', async () => {
    const mockedCategories = [
      { name: 'General Knowledge', id: 9 },
      { name: 'Books', id: 10 },
      { name: 'Films', id: 11 },
      { name: 'Music', id: 12 },
      { name: 'Musicals and Theaters', id: 13 },
      { name: 'Television', id: 14 },
      { name: 'Video Games', id: 15 },
      { name: 'Board Games', id: 16 },
      { name: 'Science and Nature', id: 17 },
      { name: 'Computer', id: 18 },
      { name: 'Mathematics', id: 19 },
      { name: 'Mythology', id: 20 },
      { name: 'Sports', id: 21 },
      { name: 'Geography', id: 22 },
      { name: 'History', id: 23 },
      { name: 'Politics', id: 24 },
      { name: 'Celebrities', id: 26 },
      { name: 'Animals', id: 27 },
      { name: 'Vehicles', id: 28 },
      { name: 'Comics', id: 29 },
      { name: 'Gadgets', id: 30 },
      { name: 'Japanese Anime', id: 31 },
      { name: 'Cartoon and Animations', id: 32 },
    ];
    const mockedOnChange = jest.fn();
    render(
      <Provider store={store}>
        {' '}
        <Router>
          <Setup options={mockedCategories} onChange={mockedOnChange} />
        </Router>
      </Provider>
    );

    const mySelectComponent = screen.getAllByTestId('my-select-component');

    expect(mySelectComponent).toBeDefined();
    expect(mySelectComponent).not.toBeNull();
    expect(mockedOnChange).toHaveBeenCalledTimes(0);
  });

  it('typeOptions to not be null, to be defined, to have been called 0 times', async () => {
    const mockedtypeOptions = [{ name: 'multiple choice', id: 'multiple' }];
    const mockedOnChange1 = jest.fn();
    render(
      <Provider store={store}>
        {' '}
        <Router>
          <Setup options={mockedtypeOptions} onChange={mockedOnChange1} />
        </Router>
      </Provider>
    );

    const mySelectComponent = screen.getAllByTestId('my-select-component');

    expect(mySelectComponent).toBeDefined();
    expect(mySelectComponent).not.toBeNull();
    expect(mockedOnChange1).toHaveBeenCalledTimes(0);
  });

  it('difficultyOptions to not be null, to be defined, to have been called 0 times', async () => {
    const mockedDifficultyOptions = [
      { name: 'Easy', id: 'easy' },
      { name: 'Medium', id: 'medium' },
      { name: 'Hard', id: 'hard' },
    ];
    const mockedOnChange2 = jest.fn();
    render(
      <Provider store={store}>
        {' '}
        <Router>
          <Setup options={mockedDifficultyOptions} onChange={mockedOnChange2} />
        </Router>
      </Provider>
    );

    const mySelectComponent = screen.getAllByTestId('my-select-component');

    expect(mySelectComponent).toBeDefined();
    expect(mySelectComponent).not.toBeNull();
    expect(mockedOnChange2).toHaveBeenCalledTimes(0);
  });
});
