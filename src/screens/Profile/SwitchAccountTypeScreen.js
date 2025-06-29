import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { ProfileContext } from './ProfileContext';

const SwitchAccountTypeScreen = () => {
  const { profile, updateProfile } = useContext(ProfileContext);
  const [type, setType] = useState(profile.accountType || 'Tenant');
  const [loading, setLoading] = useState(false);

  const handleSwitch = (newType) => setType(newType);

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => {
      updateProfile({ accountType: type });
      setLoading(false);
      Alert.alert('Success', `Switched to ${type} account!`);
    }, 800);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Switch Account Type</Text>
      <View style={styles.switchRow}>
        <TouchableOpacity
          style={[styles.typeButton, type === 'Tenant' && styles.selected]}
          onPress={() => handleSwitch('Tenant')}
        >
          <Text style={[styles.typeText, type === 'Tenant' && styles.selectedText]}>Tenant</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.typeButton, type === 'Landlord' && styles.selected]}
          onPress={() => handleSwitch('Landlord')}
        >
          <Text style={[styles.typeText, type === 'Landlord' && styles.selectedText]}>Landlord</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={handleSave} disabled={loading}>
        <Text style={styles.saveButtonText}>{loading ? 'Saving...' : 'Save'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 24, justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 28, textAlign: 'center' },
  switchRow: { flexDirection: 'row', justifyContent: 'center', marginBottom: 24 },
  typeButton: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 8,
    marginHorizontal: 10,
    backgroundColor: '#fff',
  },
  selected: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  typeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  selectedText: {
    color: '#fff',
  },
  saveButton: { backgroundColor: '#007AFF', paddingVertical: 14, borderRadius: 8, alignItems: 'center', marginTop: 8 },
  saveButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

export default SwitchAccountTypeScreen;
