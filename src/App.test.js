

import App from './App.js';
import { screen, within } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { BrowserRouter as Router } from 'react-router-dom';


describe('App', () => {
    beforeEach(() => {
        render( 
        <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>
        
        
        
      )
    })

    test("Heading exists", () => {
      const heading = screen.getByLabelText("main-title")
      expect(heading.textContent).toContain("Hello");
  });
})
