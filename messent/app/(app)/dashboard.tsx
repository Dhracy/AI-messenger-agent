import { View, ScrollView } from 'react-native';
import { Text, Button, Card } from 'react-native-paper';
import { useAuth } from '../../src/contexts/AuthContext';
import { router } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function Dashboard() {
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    router.replace('/(auth)/login');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text variant="headlineMedium">Dashboard</Text>
        <Button onPress={handleSignOut}>Sign Out</Button>
      </View>

      <View style={styles.content}>
        <Card style={styles.card} mode="outlined">
          <Card.Title title="Messages" subtitle="Manage your conversations" />
          <Card.Content>
            <Text variant="bodyMedium">No active conversations</Text>
          </Card.Content>
          <Card.Actions>
            <Button onPress={() => router.push('/(app)/messages')}>
              View Messages
            </Button>
          </Card.Actions>
        </Card>

        <Card style={styles.card} mode="outlined">
          <Card.Title title="AI Settings" subtitle="Configure AI responses" />
          <Card.Content>
            <Text variant="bodyMedium">No templates configured</Text>
          </Card.Content>
          <Card.Actions>
            <Button onPress={() => router.push('/(app)/settings')}>
              Configure AI
            </Button>
          </Card.Actions>
        </Card>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    padding: 16,
    gap: 16,
  },
  card: {
    marginBottom: 16,
  },
}); 