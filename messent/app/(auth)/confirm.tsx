import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useLocalSearchParams, router } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function ConfirmEmail() {
  const { email } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text variant="headlineMedium">Check Your Email</Text>
        <Text variant="bodyMedium" style={styles.subtitle}>
          We sent a verification link to {email}
        </Text>
      </View>

      <View style={styles.content}>
        <Button 
          mode="contained" 
          style={styles.button}
          onPress={() => router.replace('/(auth)/login')}
        >
          Go to Login
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    marginBottom: 32,
    alignItems: 'center',
  },
  subtitle: {
    marginTop: 8,
    opacity: 0.7,
    textAlign: 'center',
  },
  content: {
    gap: 16,
  },
  button: {
    padding: 4,
  },
}); 