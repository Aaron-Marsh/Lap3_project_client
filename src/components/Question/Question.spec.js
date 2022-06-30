import Question from './index';
import { screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { BrowserRouter as Router } from 'react-router-dom';

describe('CreateQuiz', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router>
          <Question />
        </Router>
      </Provider>
    );
  });

  test('Para1 i am the host to exsist', () => {
    let Para1 = screen.getByText(/i am the host/i);
    expect(Para1).toBeInTheDocument();
  });

  //   test('btn to exsist', () => {
  //     let btn =screen.getByRole('button', {
  //         name: /new question/i
  //       })
  //     expect(btn).toBeInTheDocument();
  //   });

  test('Para2 you are not the host', () => {
    let Para2 = screen.getByText(/you are not the host/i);
    expect(Para2).toBeInTheDocument();
  });

  test('Heading get ready, the game is starting soon to exsists', () => {
    let H = screen.getByText(/get ready, the game is starting soon!/i);
    expect(H).toBeInTheDocument();
  });

  test('Heading get ready, the game is starting soon to exsists', () => {
    let H = screen.getByText(/get ready, the game is starting soon!/i);
    expect(H).toBeInTheDocument();
  });

  test('congraulations! you have finished the quiz!', () => {
    let A = screen.getByText(/congraulations! you have finished the quiz!/i);
    expect(A).toBeInTheDocument();
  });
  test('its about time to exsist!', () => {
    let B = screen.getByText(/it's about time!/i);
    expect(B).toBeInTheDocument();
  });
});
