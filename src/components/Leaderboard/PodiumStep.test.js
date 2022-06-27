import { default as PodiumStep } from './PodiumStep';
import { screen, render } from '@testing-library/react';

describe('Result', () => {
    beforeEach(() => {
        const winner = { id: '1tfjiELNrwYAJeafRYlT9RwOIiD', name: 'Grace', score: 100 };
        const podium = [
            {
                0:0
            }
        ]
        render(<PodiumStep podium={podium} winner={winner}/>);
    });

    test('it renders', async () => {
        expect(1).toEqual(1);
    });
});
