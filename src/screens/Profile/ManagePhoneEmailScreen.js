import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { ProfileContext } from './ProfileContext';

const ManagePhoneEmailScreen = () => {
  const { profile, updateProfile } = useContext(ProfileContext);
  const [email, setEmail] = useState(profile.email);
  const [phone, setPhone] = useState(profile.phone || '');
  const [loading, setLoading] = useState(false);

  const handleSave = () => {
    if (!email || !phone) {
      Alert.alert('Error', 'Please enter both email and phone number.');
      return;
    }
    // Basic validation
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return;
    }
    if (!/^\d{10,}$/.test(phone)) {
      Alert.alert('Error', 'Please enter a valid phone number.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      updateProfile({ email, phone });
      setLoading(false);
      Alert.alert('Success', 'Your contact details have been updated!');
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Phone & Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
        maxLength={15}
      />
      <TouchableOpacity style={styles.button} onPress={handleSave} disabled={loading}>
        <Text style={styles.buttonText}>{loading ? 'Saving...' : 'Save Changes'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 28,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 18,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ManagePhoneEmailScreen;
