import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert } from 'react-native';

const SavedAddressesScreen = () => {
  const [addresses, setAddresses] = useState([]);
  const [address, setAddress] = useState('');

  const handleAddAddress = () => {
    if (!address.trim()) {
      Alert.alert('Error', 'Enter a valid address.');
      return;
    }
    setAddresses([...addresses, address]);
    setAddress('');
  };

  const handleRemoveAddress = (addr) => {
    setAddresses(addresses.filter(a => a !== addr));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saved Addresses</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Address"
        value={address}
        onChangeText={setAddress}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddAddress}>
        <Text style={styles.buttonText}>Add Address</Text>
      </TouchableOpacity>
      <FlatList
        data={addresses}
        keyExtractor={(item, idx) => item + idx}
        renderItem={({ item }) => (
          <View style={styles.addressItem}>
            <Text style={styles.addressText}>{item}</Text>
            <TouchableOpacity onPress={() => handleRemoveAddress(item)}>
              <Text style={styles.removeText}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>No addresses saved.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 24 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, marginBottom: 12, fontSize: 16 },
  button: { backgroundColor: '#007AFF', paddingVertical: 12, borderRadius: 8, alignItems: 'center', marginBottom: 16 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  addressItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#eee' },
  addressText: { fontSize: 16 },
  removeText: { color: 'red', fontWeight: 'bold' },
  emptyText: { color: '#888', textAlign: 'center', marginTop: 20 },
});

export default SavedAddressesScreen;
