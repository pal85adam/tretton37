import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import HomePage from './pages/HomePage/HomePage';
import App from './App';
import store from './state/store';

describe('App', () => {
  it('The fellowshop of the tretton37', () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>,
    );
    expect(
      screen.getByText('The fellowshop of the tretton37'),
    ).toBeInTheDocument();
  });
});

describe('Bad route', () => {
  it('Page not found', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/some/bad/route']}>
          <App />
        </MemoryRouter>
      </Provider>,
    );
    expect(
      screen.getByText("Oops! Looks like you're lost."),
    ).toBeInTheDocument();
  });
});
