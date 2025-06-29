import React, { useState } from 'react';
import { Text, View, Button, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TopTab = createMaterialTopTabNavigator();

const BookingForm = ({ onBook }) => {
  const [room, setRoom] = useState('');
  const [date, setDate] = useState('');
  return (
    <View style={styles.formContainer}>
      <Text style={styles.label}>Room Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter room name"
        value={room}
        onChangeText={setRoom}
      />
      <Text style={styles.label}>Booking Date</Text>
      <TextInput
        style={styles.input}
        placeholder="YYYY-MM-DD"
        value={date}
        onChangeText={setDate}
      />
      <TouchableOpacity style={styles.bookBtn} onPress={() => onBook(room, date)}>
        <Text style={styles.bookBtnText}>Book Now</Text>
      </TouchableOpacity>
    </View>
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

const BookingTab = () => {
  const [booked, setBooked] = useState(null);
  const handleBook = (room, date) => {
    if (!room || !date) return;
    setBooked({ room, date });
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {booked ? (
        <View style={styles.confirmBox}>
          <Ionicons name="checkmark-circle" size={48} color="green" />
          <Text style={{ fontSize: 20, marginTop: 10 }}>Booking Confirmed!</Text>
          <Text>Room: {booked.room}</Text>
          <Text>Date: {booked.date}</Text>
        </View>
      ) : (
        <BookingForm onBook={handleBook} />
      )}
    </View>
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
  formContainer: {
    width: '90%',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 20,
    marginTop: 40,
    alignItems: 'center',
  },
  label: {
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginTop: 10,
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
  },
  bookBtn: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  bookBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  confirmBox: {
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#eaffea',
    borderRadius: 12,
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