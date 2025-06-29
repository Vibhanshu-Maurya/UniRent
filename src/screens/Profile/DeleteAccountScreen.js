import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const DeleteAccountScreen = () => {
  const [loading, setLoading] = useState(false);
  const handleDelete = () => {
    Alert.alert('Confirm', 'Are you sure you want to delete your account?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', style: 'destructive', onPress: () => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          Alert.alert('Deleted', 'Your account has been deleted.');
        }, 1200);
      }}
    ]);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Delete Account</Text>
      <Text style={styles.warning}>Warning: This action cannot be undone.</Text>
      <TouchableOpacity style={styles.button} onPress={handleDelete} disabled={loading}>
        <Text style={styles.buttonText}>{loading ? 'Deleting...' : 'Delete Account'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 24, justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  warning: { color: 'red', fontSize: 16, marginBottom: 24, textAlign: 'center' },
  button: { backgroundColor: 'red', paddingVertical: 14, borderRadius: 8, alignItems: 'center', marginTop: 8 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

export default DeleteAccountScreen;
