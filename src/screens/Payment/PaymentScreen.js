// PaymentScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import PaymentMethodSelector from './PaymentMethodSelector'; // Adjust path as needed

const PaymentScreen = () => {
  const route = useRoute();
  // Provide default values to avoid undefined errors
  const { roomPrice = 2500, roomTitle = "Room A", roomImage } = route.params || {};

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Confirm Your Booking</Text>

      {roomImage ? (
        <Image source={{ uri: roomImage }} style={styles.image} />
      ) : null}

      <Text style={styles.title}>{roomTitle}</Text>
      <Text style={styles.price}>Price: ₹{roomPrice}</Text>

      <PaymentMethodSelector
        roomPrice={roomPrice}
        roomTitle={roomTitle}
      />
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