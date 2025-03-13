import { Stack } from 'expo-router';
import { useAuth } from '../../src/contexts/AuthContext';
import { Redirect } from 'expo-router';

export default function AppLayout() {
  const { session } = useAuth();

  // Protect app routes - redirect to login if not authenticated
  if (!session) {
    return <Redirect href="/(auth)/login" />;
  }

  return (
    <Stack>
      <Stack.Screen 
        name="dashboard" 
        options={{ 
          title: 'Dashboard',
          headerShown: true 
        }} 
      />
      <Stack.Screen 
        name="messages" 
        options={{ 
          title: 'Messages',
          headerShown: true 
        }} 
      />
      <Stack.Screen 
        name="settings" 
        options={{ 
          title: 'Settings',
          headerShown: true 
        }} 
      />
    </Stack>
  );
} 