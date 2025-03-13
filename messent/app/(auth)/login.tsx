import { View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';
import { useState } from 'react';
import { useAuth } from '../../src/contexts/AuthContext';
import { router } from 'expo-router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { signIn, error } = useAuth();

  const handleLogin = async () => {
    await signIn(email, password);
    if (!error) {
      router.replace('/(app)/dashboard');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text variant="headlineMedium">Login</Text>
        <Text variant="bodyMedium" style={styles.subtitle}>
          Welcome back to Messent
        </Text>
      </View>

      <View style={styles.form}>
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          mode="outlined"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          mode="outlined"
          secureTextEntry={!showPassword}
          right={
            <TextInput.Icon
              icon={showPassword ? 'eye-off' : 'eye'}
              onPress={() => setShowPassword(!showPassword)}
            />
          }
        />

        {error && (
          <Text style={styles.error}>{error}</Text>
        )}

        <Button 
          mode="contained" 
          style={styles.button}
          onPress={handleLogin}
        >
          Login
        </Button>

        <View style={styles.footer}>
          <Text variant="bodyMedium">Don't have an account? </Text>
          <Link href="/(auth)/register">
            <Text variant="bodyMedium" style={styles.link}>
              Register
            </Text>
          </Link>
        </View>
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
  },
  subtitle: {
    marginTop: 8,
    opacity: 0.7,
  },
  form: {
    gap: 16,
  },
  button: {
    padding: 4,
    marginTop: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  link: {
    color: '#007AFF',
  },
  error: {
    color: 'red',
    marginTop: 8,
  },
}); 