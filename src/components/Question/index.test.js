
import Question from './index.js';
import { screen, within } from '@testing-library/react';


describe('Question', () => {
    beforeEach(() => {
        render(<Question />)
    })

    test("Heading exists", () => {
      const heading = screen.getByLabelText("question-title")
      expect(heading.textContent).toContain("Questions");
  });
})
