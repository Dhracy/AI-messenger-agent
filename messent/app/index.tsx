import React from 'react';
import { View, Image } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';
import { theme } from './styles/theme';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={[styles.logoContainer, styles.logo]}>
          <Text style={{ color: '#FFFFFF', fontSize: 32 }}>M</Text>
        </View>

        <View style={styles.header}>
          <Text variant="displaySmall" style={styles.title}>Messent</Text>
          <Text variant="titleMedium" style={styles.subtitle}>
            The world's smartest messaging assistant.
          </Text>
          <Text variant="titleMedium" style={styles.subtitle}>
            It is AI-powered and secure.
          </Text>
        </View>

        <View style={styles.pagination}>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <View
              key={i}
              style={[
                styles.paginationDot,
                { backgroundColor: i === 0 ? theme.colors.primary : '#E5E7EB' }
              ]}
            />
          ))}
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Link href="/(auth)/login" asChild>
          <Button 
            mode="contained" 
            style={styles.button}
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
          >
            Start Messaging
          </Button>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logoContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  logo: {
    width: 60,
    height: 60,
    tintColor: '#FFFFFF',
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#6B7280',
    lineHeight: 24,
  },
  pagination: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 32,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  buttonContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  button: {
    borderRadius: 12,
  },
  buttonContent: {
    height: 56,
  },
  buttonLabel: {
    fontSize: 18,
    fontWeight: '600',
  },
}); 