import NumberOfQuestions from './index.js';
import { screen, within } from '@testing-library/react';



describe('NumberOfQuestions', () => {
    beforeEach(() => {
        render(<NumberOfQuestions />)
    })

    test("Heading exists", () => {
      const heading = screen.getByLabelText("Number-Of-Questions")
      expect(heading.textContent).toContain("Number");
  });
})