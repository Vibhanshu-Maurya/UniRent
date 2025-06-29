import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const dummyProperties = [
  { id: '1', name: 'Green Villa', location: 'Sector 21' },
  { id: '2', name: 'Blue Apartment', location: 'Sector 15' },
];

const SavedPropertiesScreen = () => {
  const [properties, setProperties] = useState(dummyProperties);
  const handleRemove = (id) => setProperties(properties.filter(item => item.id !== id));
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saved Properties</Text>
      <FlatList
        data={properties}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.propertyItem}>
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.location}>{item.location}</Text>
            </View>
            <TouchableOpacity onPress={() => handleRemove(item.id)}>
              <Text style={styles.remove}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>No properties saved.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 24 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  propertyItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: '#eee' },
  name: { fontSize: 16, fontWeight: 'bold' },
  location: { color: '#888', fontSize: 14 },
  remove: { color: 'red', fontWeight: 'bold' },
  empty: { color: '#888', textAlign: 'center', marginTop: 20 },
});

export default SavedPropertiesScreen;
