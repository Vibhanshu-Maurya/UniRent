import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const dummyListings = [
  { id: '1', name: 'Green Villa', location: 'Sector 21', price: '₹20,000/mo' },
  { id: '2', name: 'Blue Apartment', location: 'Sector 15', price: '₹15,000/mo' },
];

const MyListingsScreen = () => {
  const [listings, setListings] = useState(dummyListings);

  const handleRemove = (id) => {
    setListings(listings.filter(item => item.id !== id));
    Alert.alert('Removed', 'Listing removed.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Listings</Text>
      <FlatList
        data={listings}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.listingItem}>
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.location}>{item.location}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
            <TouchableOpacity onPress={() => handleRemove(item.id)}>
              <Text style={styles.remove}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>No listings found.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 24 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  listingItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: '#eee' },
  name: { fontSize: 16, fontWeight: 'bold' },
  location: { color: '#888', fontSize: 14 },
  price: { color: '#007AFF', fontWeight: 'bold', fontSize: 15 },
  remove: { color: 'red', fontWeight: 'bold' },
  empty: { color: '#888', textAlign: 'center', marginTop: 20 },
});

export default MyListingsScreen;
