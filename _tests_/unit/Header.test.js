import { screen } from '@testing-library/react';
import React from 'react';
import Header from '../../src/components/common/Header';
import { render } from './test-utils';

describe('Header component', () => {
  it('Test Header component', async () => {
    render(<Header />);
    expect(screen.getByTestId('header-logo')).toBeInTheDocument();
  });
});
