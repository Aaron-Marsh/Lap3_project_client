import { default as Podium } from './Podium';
import { screen, render } from '@testing-library/react';

describe('Result', () => {
    beforeEach(() => {
        const winners = [{
            id: '1tfjiELNrwYAJeafRYlT9RwOIiD',
            name: 'Grace',
            score: 100
          },
          {
            id: '1tfjiFoinFrbdLWlPI52dRLhNlD',
            name: 'Bob',
            score: 98
          },
          {
            id: '1tfjiDIAS8f2UYgV9ynCqWi7rZD',
            name: 'Ada',
            score: 50
          }]
        render(<Podium winners={winners}/>);
    });

    test('it renders', async () => {
        expect(1).toEqual(1);
    });
});
