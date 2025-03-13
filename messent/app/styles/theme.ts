import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0088CC',
    secondary: '#6B4EFF',
    background: '#FFFFFF',
    surface: '#FFFFFF',
    accent: '#0088CC',
    error: '#FF3B30',
    text: '#000000',
    onSurface: '#000000',
    disabled: '#9CA3AF',
    placeholder: '#6B7280',
  },
  roundness: 16,
}; 