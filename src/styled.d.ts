import { customTheme } from './styles/customTheme';

type Theme = typeof customTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

declare module '@stardust-ds/react' {
  export interface StardustTheme extends Theme {}
  export function useTheme(): Theme;
}
