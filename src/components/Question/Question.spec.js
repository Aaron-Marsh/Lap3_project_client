import Question from './index';
import { screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
import * as router from 'react-router';

describe('Question', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router>
          <Question />
        </Router>
      </Provider>
    );
  });

  test('question number', () => {
    let Para1 = screen.getByText(/question number/i);
    expect(Para1).toBeInTheDocument();
  });


  test('get ready, the game is starting soon', () => {
    let Para2 = screen.getByText(/get ready, the game is starting soon!/i);
    expect(Para2).toBeInTheDocument();
  });

  test('you have finished the quiz!', () => {
    let H = screen.getByText(/you have finished the quiz!/i);
    expect(H).toBeInTheDocument();
  });

  test('Heading get ready, the game is starting soon to exsists', () => {
    let H = screen.getByText(/get ready, the game is starting soon!/i);
    expect(H).toBeInTheDocument();
  });

  test('its about time!', () => {
    let A = screen.getByText(/it's about time!/i);
    expect(A).toBeInTheDocument();
  });




  test('home button exsist!', () => {
    screen.getByLabelText('home-button', {
      name: /let's go again/i,
    });
  });

  test('leaderboard buttonexsist!', () => {
    screen.getByLabelText('leaderboard-button', {
     name: /leaderboard\-button/i
    });

    test('its about time to exsist!', () => {
      screen.getByText(/you are playing as \{username \? username:'guest'\}/i);
    });
  });
});
