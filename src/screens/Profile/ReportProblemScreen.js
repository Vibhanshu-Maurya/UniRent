import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const ReportProblemScreen = () => {
  const [problem, setProblem] = useState('');
  const [loading, setLoading] = useState(false);

  const handleReport = () => {
    if (!problem.trim()) {
      Alert.alert('Error', 'Please describe the problem.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setProblem('');
      Alert.alert('Reported', 'Your problem has been reported.');
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Report a Problem</Text>
      <TextInput
        style={styles.input}
        placeholder="Describe the problem..."
        value={problem}
        onChangeText={setProblem}
        multiline
        numberOfLines={4}
      />
      <TouchableOpacity style={styles.button} onPress={handleReport} disabled={loading}>
        <Text style={styles.buttonText}>{loading ? 'Reporting...' : 'Report'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 24, justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, marginBottom: 18, fontSize: 16, minHeight: 80 },
  button: { backgroundColor: '#007AFF', paddingVertical: 14, borderRadius: 8, alignItems: 'center', marginTop: 8 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

export default ReportProblemScreen;
