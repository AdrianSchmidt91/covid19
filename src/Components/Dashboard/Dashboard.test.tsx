import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import Dashboard from './Dashboard';

afterEach(cleanup);

describe('Dashboard', () => {
  it('should render correctly', () => {
    render(<Dashboard />);
  });

  it('should render the heading', () => {
    render(<Dashboard />);
    const heading = screen.getByRole('heading', {
      name: /covid 19 statistic \- germany/i,
    });
    expect(heading).toHaveTextContent('Covid 19 Statistic - Germany');
  });

  it('should show select a country', () => {
    render(<Dashboard />);
    const text = screen.getByText(/select a country:/i);
    expect(text).toHaveTextContent('Select a Country');
  });

  it('should show a select fiel for the countries', () => {
    render(<Dashboard />);
    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();
  });
});
