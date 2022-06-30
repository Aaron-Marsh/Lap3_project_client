import { Welcome } from '../index';
import { SetupTests } from '../index';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Welcome', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router>
          <Welcome />
        </Router>
      </Provider>
    );
  });

  test('it renders the title', () => {
    const para = screen.getByText(
      /welcome to about time\. the quiz game you can play on your own or with friends\. if you want to jump straight into setting up a game, enter a username and click the 'got it!' button below\./i
    );
    expect(para).toBeInTheDocument();
  });

  test('it renders the title', () => {
    const para = screen.getByText(
      /if you've never played before or want a refresher on how to play then click the help button\./i
    );
    expect(para).toBeInTheDocument();
  });

  // test('it renders a help button', () => {
  //     let button = screen.getByRole('help');
  //     expect(button).toBeInTheDocument();
  // });

  // test('it should go to the setup page', () => {
  // Object.defineProperty(window, 'location', {
  //     get() {
  //     return { href: '/setup' };
  //     },
  // });
  // render(<Setup />);
  // });
});
