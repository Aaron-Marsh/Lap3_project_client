import Modal from './index';
import { screen, getByRole } from '@testing-library/react';

describe('CreateQuiz', () => {
  beforeEach(() => {
    render(<Modal />);
  });

  test('Heading need a hand exsist', () => {
    let h2 = screen.getByRole('heading', {
      name: /need a hand\? 🕒/i,
    });
    expect(h2).toBeInTheDocument();
  });

  test('Heading starting a game exsist', () => {
    let h4 = screen.getByRole('heading', {
      name: /starting a game/i,
    });
    expect(h4).toBeInTheDocument();
  });

  test('Heading playing the game exsist', () => {
    let playing = screen.getByRole('heading', {
      name: /playing the game/i,
    });
    expect(playing).toBeInTheDocument();
  });
  test('para1 to exsist', () => {
    let p1 = screen.getByText(
      /the question will be displayed on your screen, at which point you will be given 10 seconds to choose an answer\. once you choose an answer the tile will either flash green for correct or red for incorrect\. the amount of points you are awarded for a correct answer is calculated by our very clever and secret algorithm\. current scores and game leaderboards are displayed in your window\./i
    );
    expect(p1).toBeInTheDocument();
  });

  test('Heading end of the game exsist', () => {
    let end = screen.getByRole('heading', {
      name: /end of the game/i,
    });
    expect(end).toBeInTheDocument();
  });
  test('para2 to exsist', () => {
    let p2 = screen.getByText(
      /all good things must come to an end and so has your game 😞\. it's okay, we've got you! just click on create new to be redirected to the setup page where you can choose a different category or select play again to restart with the same setup\. if you want to see the all time high scores then just click on the leaderboards section to see where you stand\./i
    );
    expect(p2).toBeInTheDocument();
  });
  test('btn to exsist', () => {
    let btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
  });

  // test('it renders a form', () => {
  //     let form = screen.getByRole('form');
  //     expect(form).toBeInTheDocument();;
  // });
});
