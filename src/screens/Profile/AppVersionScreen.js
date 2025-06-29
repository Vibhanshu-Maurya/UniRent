import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AppVersionScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>App Version</Text>
    <Text style={styles.version}>Version: 1.0.0</Text>
    <Text style={styles.build}>Build: 20250627</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 24, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  version: { fontSize: 18, color: '#007AFF', marginBottom: 8 },
  build: { fontSize: 16, color: '#888' },
});

export default AppVersionScreen;
