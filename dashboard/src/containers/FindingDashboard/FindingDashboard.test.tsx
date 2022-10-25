import React from 'react';
import { render, screen } from '@testing-library/react';
import FindingDashboard from './index';
jest.mock('./hooks', () => ({uselogicForm : () => ({})}));

test('renders finding dashboard', () => {
  render(<FindingDashboard/>);
  const linkElement = screen.getByText(/RuleId/i);
  expect(linkElement).toBeInTheDocument();
});
