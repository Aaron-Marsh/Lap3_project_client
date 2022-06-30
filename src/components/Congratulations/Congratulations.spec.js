import Congratulations from './index';
import { screen, render } from '@testing-library/react';

describe('Congratulations', () => {
  beforeEach(() => {
    render(<Congratulations />);
  });


  test('everything is a node', () => {
    const Span = () => (
      <div>
        {' '}
        <span>
            C
          </span>
         
      </div>
    );
    render(<Span />);
    expect(screen.getByText('C')).toMatchSnapshot(Node);
    // expect(screen.getByText('F O R')).toBeInstanceOf(Node);
    // expect(screen.getByText('H O S T')).toBeInstanceOf(Node);
    
  });

});