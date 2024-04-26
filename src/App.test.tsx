// sum.test.js
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import HomePage from './pages/HomePage';

describe('App', () => {
  it('Home page contains HomePage', () => {
    render(<HomePage />);
    expect(screen.getByRole('paragraph')).toHaveTextContent('HomePage');
  });
});
