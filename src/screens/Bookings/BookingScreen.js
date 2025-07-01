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
        <Text style={styles.payBtnText}>Pay ₹{amount}</Text>
      </TouchableOpacity>
    </View>
  );
};

// --- Modern Booking Card ---
const BookingCard = ({ onPay, paid, onViewReceipt, booking }) => (
  <View style={styles.bookingCardContainer}>
    {/* Service Info */}
    <View style={styles.serviceRow}>
      <Image
        source={{ uri: booking.image }}
        style={styles.serviceImg}
      />
      <View style={{ flex: 1 }}>
        <Text style={styles.serviceTitle}>{booking.title}</Text>
        <Text style={styles.serviceProvider}>{booking.host}</Text>
        <View style={styles.statusBadge}><Text style={styles.statusBadgeText}>{paid ? 'Completed' : 'Pending'}</Text></View>
      </View>
      <Ionicons name="ellipsis-horizontal" size={22} color="#b39ddb" />
    </View>
    {/* Date, Time, Location */}
    <View style={styles.detailRow}>
      <Text style={styles.detailLabel}>Date & Time</Text>
      <Text style={styles.detailValue}>{booking.date} | {booking.time}</Text>
    </View>
    <View style={styles.detailRow}>
      <Text style={styles.detailLabel}>Location</Text>
      <Text style={styles.detailValue}>{booking.location}</Text>
    </View>
    {/* Map Section */}
    <View style={styles.mapSection}>
      <Image
        source={{ uri: booking.image }}
        style={styles.mapImg}
        resizeMode="cover"
      />
      <View style={styles.mapMarkerCircle}>
        <Image
          source={{ uri: booking.avatar }}
          style={styles.mapMarkerAvatar}
        />
      </View>
    </View>
    {/* Payment or Receipt */}
    {!paid ? (
      <PaymentForm amount={booking.price} onPay={onPay} />
    ) : (
      <TouchableOpacity style={styles.receiptBtn} onPress={onViewReceipt}>
        <Text style={styles.receiptBtnText}>View E-Receipt</Text>
      </TouchableOpacity>
    )}
  </View>
);

// --- Booking Tab ---
const BookingTab = () => {
  // Example booking data
  const [paid, setPaid] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);
  const booking = {
    title: 'SeaView Apartment',
    host: 'Amit Sharma',
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    date: 'Jul 10, 2025',
    time: '14:00 - 16:00',
    location: 'Juhu, Mumbai',
    price: 9500,
  };

  const handlePay = () => {
    setPaid(true);
    setTimeout(() => setShowReceipt(true), 800); // Simulate payment delay
  };

  const handleViewReceipt = () => {
    Alert.alert('E-Receipt', `Payment of ₹${booking.price} for ${booking.title} completed.\nDate: ${booking.date}\nLocation: ${booking.location}`);
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: 32 }}>
      <BookingCard onPay={handlePay} paid={paid} onViewReceipt={handleViewReceipt} booking={booking} />
    </ScrollView>
  );
};

// --- Chat History Tab ---
const ChatHistory = () => {
  // Dummy chat data
  const chats = [
    { id: '1', user: 'Host', message: 'Welcome! Let me know if you have questions.', time: '09:00 AM' },
    { id: '2', user: 'You', message: 'Thank you! I am interested in your property.', time: '09:01 AM' },
    { id: '3', user: 'Host', message: 'Great! When would you like to visit?', time: '09:02 AM' },
  ];
  return (
    <View style={{ flex: 1, backgroundColor: '#f6f8fa' }}>
      <FlatList
        data={chats}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={item.user === 'You' ? styles.chatBubbleRight : styles.chatBubbleLeft}>
            <Text style={styles.chatUser}>{item.user}</Text>
            <Text style={styles.chatMsg}>{item.message}</Text>
            <Text style={styles.chatTime}>{item.time}</Text>
          </View>
        )}
        contentContainerStyle={{ padding: 16, paddingBottom: 32 }}
      />
    </View>
  );
};

// --- Call History Tab ---
const CallHistory = () => {
  // Dummy call data
  const calls = [
    { id: '1', user: 'Host', time: '2025-07-01 14:00', type: 'Incoming', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { id: '2', user: 'You', time: '2025-07-01 10:30', type: 'Outgoing', avatar: 'https://randomuser.me/api/portraits/men/85.jpg' },
  ];
  return (
    <View style={{ flex: 1, backgroundColor: '#f6f8fa' }}>
      <FlatList
        data={calls}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.callCard}>
            <Image source={{ uri: item.avatar }} style={styles.callAvatar} />
            <View style={{ flex: 1 }}>
              <Text style={styles.callUser}>{item.user}</Text>
              <Text style={styles.callTime}>{item.time}</Text>
            </View>
            <Ionicons name={item.type === 'Incoming' ? 'call' : 'call-outline'} size={22} color={item.type === 'Incoming' ? '#43a047' : '#1976d2'} />
            <Text style={[styles.callType, { color: item.type === 'Incoming' ? '#43a047' : '#1976d2' }]}>{item.type}</Text>
          </View>
        )}
        contentContainerStyle={{ padding: 16, paddingBottom: 32 }}
      />
    </View>
  );
};

// --- Main Booking Screen with Tabs ---
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
    borderRadius: 14,
    padding: 12,
    marginBottom: 10,
    maxWidth: '80%',
    marginRight: 40,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 2,
    elevation: 1,
  },
  chatBubbleRight: {
    alignSelf: 'flex-end',
    backgroundColor: '#cce5ff',
    borderRadius: 14,
    padding: 12,
    marginBottom: 10,
    maxWidth: '80%',
    marginLeft: 40,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 2,
    elevation: 1,
  },
  chatUser: {
    fontWeight: 'bold',
    color: '#1976d2',
    marginBottom: 2,
    fontSize: 13,
  },
  chatMsg: {
    fontSize: 15,
    color: '#222',
    marginBottom: 4,
  },
  chatTime: {
    fontSize: 11,
    color: '#888',
    alignSelf: 'flex-end',
  },
  callCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 2,
    elevation: 1,
  },
  callAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  callUser: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#222',
  },
  callTime: {
    fontSize: 13,
    color: '#888',
  },
  callType: {
    fontWeight: 'bold',
    marginLeft: 8,
    fontSize: 13,
  },
});

export default Booking;