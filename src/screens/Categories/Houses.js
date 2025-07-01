import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';

const houses = [
  {
    id: '1',
    title: 'Bungalow in Lonavala',
    location: 'Lonavala, Maharashtra',
    price: '₹18,000/month',
    image: { uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' },
  },
  {
    id: '2',
    title: 'Heritage Haveli',
    location: 'Jaipur, Rajasthan',
    price: '₹15,000/month',
    image: { uri: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=400&q=80' },
  },
  {
    id: '3',
    title: 'Kerala Backwater Villa',
    location: 'Alleppey, Kerala',
    price: '₹12,000/month',
    image: { uri: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80' },
  },
  {
    id: '4',
    title: 'Goan Beach House',
    location: 'Calangute, Goa',
    price: '₹14,000/month',
    image: { uri: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80' },
  },
  {
    id: '5',
    title: 'Himalayan Cottage',
    location: 'Manali, Himachal Pradesh',
    price: '₹10,000/month',
    image: { uri: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80' },
  },
];

const HouseCard = ({ house }) => (
  <View style={styles.card}>
    <Image source={house.image} style={styles.image} />
    <View style={styles.infoContainer}>
      <Text style={styles.title}>{house.title}</Text>
      <Text style={styles.location}>{house.location}</Text>
      <Text style={styles.price}>{house.price}</Text>
      <TouchableOpacity style={styles.bookBtn}>
        <Text style={styles.bookBtnText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const HousesScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={houses}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <HouseCard house={item} />}
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
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#222e3a',
    marginBottom: 4,
  },
  location: {
    color: '#4fd1f9',
    fontSize: 13,
    marginBottom: 6,
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

export default HousesScreen;