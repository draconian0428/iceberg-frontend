import { ThemeProvider } from 'styled-components';
import { THEME_PROPS } from './config/config';
import { StateProvider } from './context/state';

interface ProviderProps {
  children: React.ReactNode;
}

export const Provider = ({ children }: ProviderProps) => {
  return (
    <ThemeProvider theme={{ ...THEME_PROPS }}>
      <StateProvider>{children}</StateProvider>
    </ThemeProvider>
  );
};
