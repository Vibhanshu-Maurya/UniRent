import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
// import PaymentMethodSelector from '../components/PaymentMethodSelector'; // Adjust the path if needed
import PaymentMethodSelector from './PaymentMethodSelector'; // Adjust the path if needed

const PaymentScreen = () => {
  const route = useRoute();
  const { roomPrice, roomTitle, roomImage } = route.params || {};

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Confirm Your Booking</Text>

      <Image source={{ uri: roomImage }} style={styles.image} />

      <Text style={styles.title}>{roomTitle}</Text>
      <Text style={styles.price}>Price: ₹{roomPrice}</Text>

      <PaymentMethodSelector roomPrice={roomPrice} />
    </ScrollView>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    marginBottom: 20,
    color: '#444',
  },
});
