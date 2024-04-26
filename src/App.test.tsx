// sum.test.js
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('Click on the Vite and React logos to learn more', () => {
    render(<App />);
    expect(screen.getByRole('button')).toHaveTextContent('count is');
  });
});
