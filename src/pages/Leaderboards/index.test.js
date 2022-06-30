import { default as Leaderboards } from './';
import { screen, render } from '@testing-library/react';

describe('Result', () => {
  beforeEach(() => {
    render(<Leaderboards />);
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
