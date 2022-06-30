import NotHostMessage from './index';
import { screen, container } from '@testing-library/react';

describe('CreateQuiz', () => {
  beforeEach(() => {
    render(<NotHostMessage />);
  });

  test('everything is a node', () => {
    const Span = () => (
      <div>
        {' '}
        <span>W A I T I N G F O R H O S T </span>
        <span>F O R </span>
        <span>H O S T</span>
        <span>W A I T I N G</span>
      </div>
    );
    render(<Span />);
    expect(screen.getByText('W A I T I N G')).toBeInstanceOf(Node);
    expect(screen.getByText('F O R')).toBeInstanceOf(Node);
    expect(screen.getByText('H O S T')).toBeInstanceOf(Node);
    
  });

});



