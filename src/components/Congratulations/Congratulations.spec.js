import Congratulations from './index';
import { screen, render } from '@testing-library/react';

describe('Congratulations', () => {
  beforeEach(() => {
    render(<Congratulations />);
  });


  test('Heading to exsist', () => {
   const h1 = screen.getByRole('heading', {
        name: /congratulations/i
      })
      expect(h1).toBeInTheDocument();
});
});