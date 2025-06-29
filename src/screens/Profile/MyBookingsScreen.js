import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const dummyBookings = [
  { id: '1', property: 'Green Villa', date: '2025-07-01', status: 'Confirmed' },
  { id: '2', property: 'Blue Apartment', date: '2025-07-10', status: 'Pending' },
];

const MyBookingsScreen = () => {
  const [bookings] = useState(dummyBookings);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Bookings</Text>
      <FlatList
        data={bookings}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.bookingItem}>
            <View>
              <Text style={styles.property}>{item.property}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>
            <Text style={[styles.status, item.status === 'Confirmed' ? styles.confirmed : styles.pending]}>{item.status}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>No bookings found.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 24 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  bookingItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: '#eee' },
  property: { fontSize: 16, fontWeight: 'bold' },
  date: { color: '#888', fontSize: 14 },
  status: { fontWeight: 'bold', fontSize: 15 },
  confirmed: { color: 'green' },
  pending: { color: 'orange' },
  empty: { color: '#888', textAlign: 'center', marginTop: 20 },
});

export default MyBookingsScreen;
