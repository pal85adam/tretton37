import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import HomePage from './pages/HomePage';
import App from './App';

describe('App', () => {
  it('The fellowshop of the tretton37', () => {
    render(<HomePage />);
    expect(
      screen.getByText('The fellowshop of the tretton37'),
    ).toBeInTheDocument();
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
