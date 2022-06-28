import { default as Leaderboards } from './';
import { screen, render } from '@testing-library/react';

describe('Result', () => {
    beforeEach(() => {
        render(<Leaderboards />);
    });

    test('it renders', async () => {
        expect(1).toEqual(1);
    });
});
