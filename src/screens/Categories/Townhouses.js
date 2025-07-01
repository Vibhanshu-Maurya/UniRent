import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';

const townhouses = [
  {
    id: '1',
    title: 'Bandra Townhouse',
    location: 'Bandra, Mumbai',
    price: '₹12,000/month',
    image: { uri: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80' },
  },
  {
    id: '2',
    title: 'Whitefield Townhouse',
    location: 'Whitefield, Bangalore',
    price: '₹10,500/month',
    image: { uri: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80' },
  },
  {
    id: '3',
    title: 'Salt Lake Townhouse',
    location: 'Salt Lake, Kolkata',
    price: '₹9,800/month',
    image: { uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' },
  },
  {
    id: '4',
    title: 'Anna Nagar Townhouse',
    location: 'Anna Nagar, Chennai',
    price: '₹11,000/month',
    image: { uri: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=400&q=80' },
  },
  {
    id: '5',
    title: 'Gachibowli Townhouse',
    location: 'Gachibowli, Hyderabad',
    price: '₹10,000/month',
    image: { uri: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80' },
  },
];

const TownhouseCard = ({ townhouse }) => (
  <View style={styles.card}>
    <Image source={townhouse.image} style={styles.image} />
    <View style={styles.infoContainer}>
      <Text style={styles.title}>{townhouse.title}</Text>
      <Text style={styles.location}>{townhouse.location}</Text>
      <Text style={styles.price}>{townhouse.price}</Text>
      <TouchableOpacity style={styles.bookBtn}>
        <Text style={styles.bookBtnText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const TownhousesScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={townhouses}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <TownhouseCard townhouse={item} />}
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

export default TownhousesScreen;