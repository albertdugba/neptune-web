import { createContext, PropsWithChildren } from 'react';

import { Theme, ThemeType } from '../../common/theme';
import { StyleInjector } from '../../utilities';

export const ThemeContext = createContext<ThemeType>(Theme.LIGHT);

type ThemeProviderProps = PropsWithChildren<{
  theme: ThemeType;
}>;

export const ThemeProvider = ({ theme, children }: ThemeProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>
      <StyleInjector className={`np-theme-${theme}`}>{children}</StyleInjector>
    </ThemeContext.Provider>
  );
};
