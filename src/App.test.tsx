// sum.test.js
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import HomePage from './pages/HomePage';
import App from './App';

describe('App', () => {
  it('Home page contains HomePage', () => {
    render(<HomePage />);
    expect(screen.getByRole('paragraph')).toHaveTextContent('HomePage');
  });
});

describe('Bad route', () => {
  it('Page not found', () => {
    render(
      <MemoryRouter initialEntries={['/some/bad/route']}>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByText('NotFound')).toBeInTheDocument();
  });
});
