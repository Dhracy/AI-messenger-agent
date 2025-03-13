import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import { theme } from '../src/styles/theme';
import { AuthProvider } from '../src/contexts/AuthContext';

export default function Layout() {
  return (
    <AuthProvider>
      <PaperProvider theme={theme}>
        <Stack>
          <Stack.Screen 
            name="index" 
            options={{ 
              title: 'Welcome',
              headerShown: false 
            }} 
          />
          <Stack.Screen 
            name="(auth)/login" 
            options={{ 
              title: 'Login',
              headerShown: false 
            }} 
          />
          <Stack.Screen 
            name="(auth)/register" 
            options={{ 
              title: 'Register',
              headerShown: false 
            }} 
          />
        </Stack>
      </PaperProvider>
    </AuthProvider>
  );
} 