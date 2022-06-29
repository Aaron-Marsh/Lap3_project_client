

import App from './App.js';
import { screen, within } from '@testing-library/react';


describe('App', () => {
    beforeEach(() => {
        render(<App />)
    })

    test("Heading exists", () => {
      const heading = screen.getByLabelText("main-title")
      expect(heading.textContent).toContain("Hello");
  });
})
