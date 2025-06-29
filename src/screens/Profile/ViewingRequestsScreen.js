import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const dummyRequests = [
  { id: '1', property: 'Green Villa', date: '2025-07-05', status: 'Pending' },
  { id: '2', property: 'Blue Apartment', date: '2025-07-08', status: 'Confirmed' },
];

const ViewingRequestsScreen = () => {
  const [requests] = useState(dummyRequests);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Viewing Requests</Text>
      <FlatList
        data={requests}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.requestItem}>
            <View>
              <Text style={styles.property}>{item.property}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>
            <Text style={[styles.status, item.status === 'Confirmed' ? styles.confirmed : styles.pending]}>{item.status}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>No requests found.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 24 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  requestItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: '#eee' },
  property: { fontSize: 16, fontWeight: 'bold' },
  date: { color: '#888', fontSize: 14 },
  status: { fontWeight: 'bold', fontSize: 15 },
  confirmed: { color: 'green' },
  pending: { color: 'orange' },
  empty: { color: '#888', textAlign: 'center', marginTop: 20 },
});

export default ViewingRequestsScreen;
