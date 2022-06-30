import { default as Leaderboard } from './';
import { screen, render } from '@testing-library/react';
global.fetch = require('jest-fetch-mock');


describe('Result', () => {
    beforeEach(() => {
        fetch.resetMocks()
        render(<Leaderboard />);
    });

    test('fetch called', () => {
        expect(fetch).toHaveBeenCalledTimes(0)
    });

    test('fetch called with correct url', () => {
        expect(fetch).toHaveBeenCalledWith("https://lap3quizzer.herokuapp.com/scores", {"method": "GET"})
    });

    test('successful fetch', () => {
        fetch.mockResponse(JSON.stringify({ "rows": [
            {
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
            }] }))
        expect(fetch).toHaveBeenCalled()
    });

    test('successful fetch', () => {
        fetch.mockReject(new Error('Fake disaster'))

        expect(fetch).toHaveBeenCalled()
    });
});
