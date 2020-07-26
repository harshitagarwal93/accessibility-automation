import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe('Main app', () => {
  it('should check for accessibility issues', async () => {
      const container = render(<App />);
      const results = await axe(container.baseElement);
      expect(results).toHaveNoViolations();
  });
});