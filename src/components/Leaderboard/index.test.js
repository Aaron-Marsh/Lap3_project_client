import { default as Leaderboard } from './';
import { screen, render } from '@testing-library/react';

describe('Result', () => {
    beforeEach(() => {
        render(<Leaderboard />);
    });

    test('it renders', () => {
        expect(1).toEqual(1);
    });
});
