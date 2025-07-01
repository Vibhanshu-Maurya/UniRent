import React, { useState } from 'react';
import { FlatList, Text, View, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TopTab = createMaterialTopTabNavigator();

// --- Payment Form ---
const PaymentForm = ({ amount, onPay }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  return (
    <View style={styles.paymentCard}>
      <Text style={styles.paymentTitle}>Payment Details</Text>
      <TextInput
        style={styles.input}
        placeholder="Card Number"
        keyboardType="number-pad"
        value={cardNumber}
        onChangeText={setCardNumber}
        maxLength={16}
      />
      <View style={{ flexDirection: 'row', gap: 10 }}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="MM/YY"
          value={expiry}
          onChangeText={setExpiry}
          maxLength={5}
        />
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="CVV"
          value={cvv}
          onChangeText={setCvv}
          maxLength={4}
          secureTextEntry
        />
      </View>
      <TouchableOpacity
        style={styles.payBtn}
        onPress={() => {
          if (!cardNumber || !expiry || !cvv) {
            Alert.alert('Error', 'Please fill all payment fields');
            return;
          }
          onPay();
        }}
      >
        <Text style={styles.payBtnText}>Pay ${amount}</Text>
      </TouchableOpacity>
    </View>
  );
};

// --- Modern Booking Card ---
const BookingCard = ({ onPay, paid, onViewReceipt }) => (
  <View style={styles.bookingCardContainer}>
    {/* Service Info */}
    <View style={styles.serviceRow}>
      <Image
        source={{ uri: 'https://images.pexels.com/photos/4239035/pexels-photo-4239035.jpeg?auto=compress&w=80&h=80' }}
        style={styles.serviceImg}
      />
      <View style={{ flex: 1 }}>
        <Text style={styles.serviceTitle}>Home Cleaning</Text>
        <Text style={styles.serviceProvider}>Maryland Winkles</Text>
        <View style={styles.statusBadge}><Text style={styles.statusBadgeText}>Completed</Text></View>
      </View>
      <Ionicons name="ellipsis-horizontal" size={22} color="#b39ddb" />
    </View>
    {/* Date, Time, Location */}
    <View style={styles.detailRow}>
      <Text style={styles.detailLabel}>Date & Time</Text>
      <Text style={styles.detailValue}>Dec 12, 2024 | 13:00 - 15:00 PM</Text>
    </View>
    <View style={styles.detailRow}>
      <Text style={styles.detailLabel}>Location</Text>
      <Text style={styles.detailValue}>1691 Carpenter Pass</Text>
    </View>
    {/* Map Section */}
    <View style={styles.mapSection}>
      <Image
        source={require('../../../assets/SystemImages/vm.jpg')}
        style={styles.mapImg}
        resizeMode="cover"
      />
      <View style={styles.mapMarkerCircle}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
          style={styles.mapMarkerAvatar}
        />
      </View>
    </View>
    {/* Payment or Receipt */}
    {!paid ? (
      <PaymentForm amount={49.99} onPay={onPay} />
    ) : (
      <TouchableOpacity style={styles.receiptBtn} onPress={onViewReceipt}>
        <Text style={styles.receiptBtnText}>View E-Receipt</Text>
      </TouchableOpacity>
    )}
  </View>
);

const BookingTab = () => {
  const [paid, setPaid] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);

  const handlePay = () => {
    setPaid(true);
    setTimeout(() => setShowReceipt(true), 800); // Simulate payment delay
  };

  const handleViewReceipt = () => {
    Alert.alert('E-Receipt', 'Payment of $49.99 for Home Cleaning completed.\nDate: Dec 12, 2024\nLocation: 1691 Carpenter Pass');
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: 32 }}>
      <BookingCard onPay={handlePay} paid={paid} onViewReceipt={handleViewReceipt} />
    </ScrollView>
  );
};

const ChatHistory = () => {
  // Dummy chat data
  const chats = [
    { id: '1', user: 'Landlord', message: 'Welcome! Let me know if you have questions.' },
    { id: '2', user: 'You', message: 'Thank you! I am interested in your property.' },
    { id: '3', user: 'Landlord', message: 'Great! When would you like to visit?' },
  ];
  return (
    <FlatList
      data={chats}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <View style={item.user === 'You' ? styles.chatBubbleRight : styles.chatBubbleLeft}>
          <Text style={styles.chatUser}>{item.user}:</Text>
          <Text>{item.message}</Text>
        </View>
      )}
      contentContainerStyle={{ padding: 16 }}
    />
  );
};

const CallHistory = () => {
  // Dummy call data
  const calls = [
    { id: '1', user: 'Landlord', time: '2025-06-20 14:00', type: 'Incoming' },
    { id: '2', user: 'You', time: '2025-06-21 10:30', type: 'Outgoing' },
  ];
  return (
    <FlatList
      data={calls}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <View style={styles.callRow}>
          <Ionicons name={item.type === 'Incoming' ? 'call' : 'call-outline'} size={20} color="#007AFF" />
          <Text style={{ marginLeft: 8 }}>{item.user}</Text>
          <Text style={{ marginLeft: 8 }}>{item.time}</Text>
          <Text style={{ marginLeft: 8, color: item.type === 'Incoming' ? 'green' : 'blue' }}>{item.type}</Text>
        </View>
      )}
      contentContainerStyle={{ padding: 16 }}
    />
  );
};

const Booking = () => (
  <View style={{ flex: 1, marginTop: 40 }}>
    <TopTab.Navigator>
      <TopTab.Screen name="Book" component={BookingTab} />
      <TopTab.Screen name="Chat" component={ChatHistory} />
      <TopTab.Screen name="Call History" component={CallHistory} />
    </TopTab.Navigator>
  </View>
);

const styles = StyleSheet.create({
  bookingCardContainer: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 20,
    margin: 18,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
    width: 340,
    alignSelf: 'center',
  },
  serviceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  serviceImg: {
    width: 56,
    height: 56,
    borderRadius: 16,
    marginRight: 12,
  },
  serviceTitle: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#222e3a',
  },
  serviceProvider: {
    color: '#888',
    fontSize: 13,
    marginBottom: 2,
  },
  statusBadge: {
    backgroundColor: '#e1fbe1',
    borderRadius: 8,
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginTop: 4,
  },
  statusBadgeText: {
    color: '#2e7d32',
    fontWeight: 'bold',
    fontSize: 12,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  detailLabel: {
    color: '#888',
    fontSize: 13,
  },
  detailValue: {
    color: '#222e3a',
    fontWeight: 'bold',
    fontSize: 15,
  },
  mapSection: {
    marginVertical: 18,
    borderRadius: 18,
    overflow: 'hidden',
    position: 'relative',
    height: 120,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapImg: {
    width: '100%',
    height: '100%',
  },
  mapMarkerCircle: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -24,
    marginTop: -24,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#7c4dff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  mapMarkerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  paymentCard: {
    backgroundColor: '#f7f7fa',
    borderRadius: 16,
    padding: 16,
    marginTop: 10,
    marginBottom: 8,
  },
  paymentTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
    color: '#222e3a',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  payBtn: {
    backgroundColor: '#7c4dff',
    padding: 14,
    borderRadius: 10,
    marginTop: 8,
    alignItems: 'center',
  },
  payBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1,
  },
  receiptBtn: {
    backgroundColor: '#7c4dff',
    borderRadius: 12,
    marginTop: 18,
    paddingVertical: 14,
    alignItems: 'center',
  },
  receiptBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1,
  },
  chatBubbleLeft: {
    alignSelf: 'flex-start',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    padding: 10,
    marginBottom: 8,
    maxWidth: '80%',
  },
  chatBubbleRight: {
    alignSelf: 'flex-end',
    backgroundColor: '#cce5ff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 8,
    maxWidth: '80%',
  },
  chatUser: {
    fontWeight: 'bold',
    marginBottom: 2,
  },
  callRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
});

export default Booking;