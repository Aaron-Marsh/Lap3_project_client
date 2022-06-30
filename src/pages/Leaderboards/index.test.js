import { default as Leaderboards } from './';
import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Result', () => {
  beforeEach(() => {
    render(   <Provider store={store}>
      <Router>
        <Leaderboards />
      </Router>
    </Provider>);
  });

  test('it renders', async () => {
    expect(1).toEqual(1);
  });
  test('Heading end of the game exsist', () => {
    let end = screen.getByRole('heading', {
      name: /top 10 leaderboard/i,
    });
    expect(end).toBeInTheDocument();
  });
});
