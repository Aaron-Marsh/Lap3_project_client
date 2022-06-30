import Timer from './index.js';
import { screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';

describe('Timer', () => {
  beforeEach(() => {
    render(
     <Timer/>
    );
  });
  test('Heading seconds left exsist', () => {
    let end = screen.getByText(/seconds left/i);
    expect(end).toBeInTheDocument();
  });
  test('Heading only exsist', () => {
    let end = screen.getByText(/only/i);
    expect(end).toBeInTheDocument();
  });
});
