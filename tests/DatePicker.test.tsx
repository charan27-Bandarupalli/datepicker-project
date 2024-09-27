import React from 'react';
import { render, screen } from '@testing-library/react';
import { DatePicker } from '../src/components';

describe('DatePicker', () => {
  it('renders without crashing', () => {
    render(<DatePicker onDateSelect={() => {}} />);
    expect(screen.getByText('Date Picker')).toBeInTheDocument();
  });

  // Add more tests here
});