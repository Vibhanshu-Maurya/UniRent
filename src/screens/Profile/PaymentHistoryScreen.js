import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const dummyPayments = [
  { id: '1', amount: '₹20,000', date: '2025-07-01', status: 'Paid' },
  { id: '2', amount: '₹15,000', date: '2025-06-01', status: 'Pending' },
];

const PaymentHistoryScreen = () => {
  const [payments] = useState(dummyPayments);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment History</Text>
      <FlatList
        data={payments}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.paymentItem}>
            <Text style={styles.amount}>{item.amount}</Text>
            <Text style={styles.date}>{item.date}</Text>
            <Text style={[styles.status, item.status === 'Paid' ? styles.paid : styles.pending]}>{item.status}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>No payments found.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 24 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  paymentItem: { paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: '#eee' },
  amount: { fontWeight: 'bold', fontSize: 16 },
  date: { color: '#888', fontSize: 14 },
  status: { fontWeight: 'bold', fontSize: 15 },
  paid: { color: 'green' },
  pending: { color: 'orange' },
  empty: { color: '#888', textAlign: 'center', marginTop: 20 },
});

export default PaymentHistoryScreen;
