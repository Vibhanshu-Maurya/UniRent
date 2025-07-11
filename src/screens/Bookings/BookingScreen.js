import React from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TopTab = createMaterialTopTabNavigator();

const Booking = () => (
  <View style={{ flex: 1, marginTop: 30 }}>
    <TopTab.Navigator>
      <TopTab.Screen name="Book" component={BookingTab} />
      <TopTab.Screen name="Chat" component={ChatHistory} />
      <TopTab.Screen name="Call History" component={CallHistory} />
    </TopTab.Navigator>
  </View>
);

const BookingTab = () => {
  const bookings = [
    {
      id: '1',
      title: '1BHK Flat in Andheri, Mumbai',
      date: '2025-07-15',
      price: '₹12,500/month',
      image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: '2',
      title: 'Studio Apartment in Koramangala, Bangalore',
      date: '2025-08-02',
      price: '₹15,000/month',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: '3',
      title: '2BHK House in Salt Lake, Kolkata',
      date: '2025-09-10',
      price: '₹13,800/month',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: '4',
      title: 'Flat near Connaught Place, Delhi',
      date: '2025-10-05',
      price: '₹10,500/month',
      image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: '5',
      title: 'Room in Banjara Hills, Hyderabad',
      date: '2025-11-20',
      price: '₹14,200/month',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=400&q=80',
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDate}>{item.date}</Text>
        <Text style={styles.cardPrice}>{item.price}</Text>
        <TouchableOpacity
          style={styles.cancelBtn}
          onPress={() =>
            Alert.alert(
              'Cancel Booking',
              `Are you sure you want to cancel "${item.title}"?`,
              [
                { text: 'No', style: 'cancel' },
                { text: 'Yes', onPress: () => console.log('Cancelled', item.id) },
              ]
            )
          }
        >
          <Text style={styles.cancelBtnText}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <Ionicons name="chevron-forward" size={24} color="#555" />
    </View>
  );

  return (
    <FlatList
      data={bookings}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={{ padding: 16 }}
    />
  );
};

const ChatHistory = () => {
  const chats = [
    { id: '1', name: 'Ravi Sharma', lastMessage: 'Will call you soon.', time: '10:24 AM' },
    { id: '2', name: 'Pooja Rani', lastMessage: 'Flat is available.', time: 'Yesterday' },
    { id: '3', name: 'Amit Verma', lastMessage: 'Send the documents.', time: '2 days ago' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.chatCard}>
      <Ionicons name="chatbubbles-outline" size={30} color="#007AFF" />
      <View style={styles.chatContent}>
        <Text style={styles.chatName}>{item.name}</Text>
        <Text style={styles.chatMessage}>{item.lastMessage}</Text>
      </View>
      <Text style={styles.chatTime}>{item.time}</Text>
    </View>
  );

  return (
    <FlatList
      data={chats}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={{ padding: 16 }}
    />
  );
};

const CallHistory = () => {
  const calls = [
    { id: '1', name: 'Ravi Sharma', time: '10:00 AM', type: 'incoming' },
    { id: '2', name: 'Pooja Rani', time: 'Yesterday 3:45 PM', type: 'outgoing' },
    { id: '3', name: 'Amit Verma', time: 'July 7, 8:15 PM', type: 'missed' },
  ];

  const renderItem = ({ item }) => {
    let iconName = 'call-outline';
    let iconColor = '#28A745';

    if (item.type === 'missed') {
      iconName = 'call-missed-outline';
      iconColor = '#FF3B30';
    } else if (item.type === 'outgoing') {
      iconColor = '#007AFF';
    }

    return (
      <View style={styles.callCard}>
        <Ionicons name={iconName} size={28} color={iconColor} />
        <View style={styles.callContent}>
          <Text style={styles.callName}>{item.name}</Text>
          <Text style={styles.callTime}>{item.time}</Text>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={calls}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={{ padding: 16 }}
    />
  );
};

export default Booking;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
    marginBottom: 16,
    overflow: 'hidden',
  },
  cardImage: {
    width: 100,
    height: 100,
  },
  cardContent: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardDate: {
    color: '#666',
    marginTop: 4,
  },
  cardPrice: {
    color: '#1E90FF',
    marginTop: 4,
    fontWeight: '600',
  },
  cancelBtn: {
    marginTop: 8,
    backgroundColor: '#FF6347',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  cancelBtnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  chatCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    elevation: 2,
    marginBottom: 12,
  },
  chatContent: {
    flex: 1,
    marginLeft: 12,
  },
  chatName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  chatMessage: {
    fontSize: 14,
    color: '#555',
    marginTop: 2,
  },
  chatTime: {
    fontSize: 12,
    color: '#999',
  },
  callCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    elevation: 2,
    marginBottom: 12,
  },
  callContent: {
    marginLeft: 12,
  },
  callName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  callTime: {
    fontSize: 14,
    color: '#555',
    marginTop: 2,
  },
});
