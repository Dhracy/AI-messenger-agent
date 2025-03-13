import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export default function Settings() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">AI Settings</Text>
      <Text variant="bodyMedium">Coming soon...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
}); 