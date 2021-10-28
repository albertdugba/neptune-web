import { render, screen } from '@testing-library/react';

import { Theme } from '../../common/theme';

import { ThemeProvider } from './ThemeProvider';

describe('ThemeProvider', () => {
  it('appends theme to children', () => {
    render(
      <ThemeProvider theme={Theme.LIGHT}>
        <div>children 1</div>
        <div>children 2</div>
      </ThemeProvider>,
    );

    expect(screen.getByText('children 1')).toHaveClass('np-theme-light');
    expect(screen.getByText('children 2')).toHaveClass('np-theme-light');
  });

  it('concatenate className with children', () => {
    render(
      <ThemeProvider theme={Theme.LIGHT}>
        <div className="other class names">children</div>
      </ThemeProvider>,
    );

    expect(screen.getByText('children')).toHaveClass('np-theme-light other class names');
  });

  it('can nest theme providers', () => {
    render(
      <ThemeProvider theme={Theme.LIGHT}>
        <div>light</div>
        <ThemeProvider theme={Theme.NAVY}>
          <div>navy</div>
          <ThemeProvider theme={Theme.DARK}>
            <div>dark</div>
          </ThemeProvider>
        </ThemeProvider>
      </ThemeProvider>,
    );

    expect(screen.getByText('light')).toHaveClass('np-theme-light');
    expect(screen.getByText('navy')).toHaveClass('np-theme-navy');
    expect(screen.getByText('dark')).toHaveClass('np-theme-dark');
  });
});
