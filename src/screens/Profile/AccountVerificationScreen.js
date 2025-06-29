import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const AccountVerificationScreen = () => {
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRequestVerification = () => {
    setLoading(true);
    setTimeout(() => {
      setVerified(true);
      setLoading(false);
      Alert.alert('Requested', 'Verification request sent!');
    }, 1200);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account Verification</Text>
      <Text style={styles.status}>{verified ? 'Verified' : 'Not Verified'}</Text>
      {!verified && (
        <TouchableOpacity style={styles.button} onPress={handleRequestVerification} disabled={loading}>
          <Text style={styles.buttonText}>{loading ? 'Requesting...' : 'Request Verification'}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 24, justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  status: { fontSize: 18, color: '#007AFF', marginBottom: 24, textAlign: 'center' },
  button: { backgroundColor: '#007AFF', paddingVertical: 14, borderRadius: 8, alignItems: 'center', marginTop: 8 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

export default AccountVerificationScreen;
