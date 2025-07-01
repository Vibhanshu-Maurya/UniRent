import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';

const allRooms = [
  // Apartments
  {
    id: 'a1',
    type: 'Apartment',
    title: 'Mumbai City Apartment',
    location: 'Andheri, Mumbai',
    price: '₹9,500/month',
    image: { uri: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80' }, // Apartment room
  },
  {
    id: 'a2',
    type: 'Apartment',
    title: 'Bangalore Studio',
    location: 'Indiranagar, Bangalore',
    price: '₹8,000/month',
    image: { uri: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80' }, // Apartment room
  },
  // Houses
  {
    id: 'h1',
    type: 'House',
    title: 'Bungalow in Lonavala',
    location: 'Lonavala, Maharashtra',
    price: '₹9,000/month',
    image: { uri: 'https://images.unsplash.com/photo-1560448075-bb0bfcf7c6c8?auto=format&fit=crop&w=400&q=80' }, // House room
  },
  {
    id: 'h2',
    type: 'House',
    title: 'Heritage Haveli',
    location: 'Jaipur, Rajasthan',
    price: '₹7,500/month',
    image: { uri: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80' }, // House room
  },
  // Townhouses
  {
    id: 't1',
    type: 'Townhouse',
    title: 'Bandra Townhouse',
    location: 'Bandra, Mumbai',
    price: '₹8,500/month',
    image: { uri: 'https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&w=400&q=80' }, // Townhouse room
  },
  {
    id: 't2',
    type: 'Townhouse',
    title: 'Whitefield Townhouse',
    location: 'Whitefield, Bangalore',
    price: '₹7,800/month',
    image: { uri: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=400&q=80' }, // Townhouse room
  },
  // Offices
  {
    id: 'o1',
    type: 'Office',
    title: 'Connaught Place Office',
    location: 'Connaught Place, Delhi',
    price: '₹10,000/month',
    image: { uri: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80' }, // Office room
  },
  {
    id: 'o2',
    type: 'Office',
    title: 'BKC Corporate Space',
    location: 'Bandra Kurla Complex, Mumbai',
    price: '₹9,200/month',
    image: { uri: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80' }, // Office room
  },
  // Villas
  {
    id: 'v1',
    type: 'Villa',
    title: 'Udaipur Lake Villa',
    location: 'Udaipur, Rajasthan',
    price: '₹9,800/month',
    image: { uri: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80' }, // Villa room
  },
  {
    id: 'v2',
    type: 'Villa',
    title: 'Goa Beachfront Villa',
    location: 'Candolim, Goa',
    price: '₹8,700/month',
    image: { uri: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80' }, // Villa room
  },
];

const RoomCard = ({ room }) => (
  <View style={styles.card}>
    <Image source={room.image} style={styles.image} />
    <View style={styles.infoContainer}>
      <Text style={styles.type}>{room.type}</Text>
      <Text style={styles.title}>{room.title}</Text>
      <Text style={styles.location}>{room.location}</Text>
      <Text style={styles.price}>{room.price}</Text>
      <TouchableOpacity style={styles.bookBtn}>
        <Text style={styles.bookBtnText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const AllRoomTypesScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={allRooms}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <RoomCard room={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 16 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f8fc',
    paddingHorizontal: 12,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 18,
    overflow: 'hidden',
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 12,
    marginRight: 14,
    backgroundColor: '#e0e0e0',
  },
  infoContainer: {
    flex: 1,
  },
  type: {
    color: '#4fd1f9',
    fontWeight: 'bold',
    fontSize: 13,
    marginBottom: 2,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#222e3a',
    marginBottom: 2,
  },
  location: {
    color: '#888',
    fontSize: 13,
    marginBottom: 4,
  },
  price: {
    color: '#222e3a',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 8,
  },
  bookBtn: {
    backgroundColor: '#4fd1f9',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 18,
    alignSelf: 'flex-start',
  },
  bookBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default AllRoomTypesScreen;