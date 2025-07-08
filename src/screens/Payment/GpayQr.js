import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GpayQr = ({ route }) => {
  const { roomPrice } = route.params;
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleConfirmPayment = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      Alert.alert('', 'Payment Successful');
      navigation.navigate('PaymentSuccessfulScreen', {
        roomPrice, // Optional: Pass data to success screen
      });
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan & Pay via Google Pay</Text>
      <Image
        source={require('../../../assets/SystemImages/QR.jpg')}
        style={styles.qrImage}
      />
      <Text style={styles.amount}>Amount: ₹{roomPrice}</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#34A853" style={{ marginTop: 20 }} />
      ) : (
        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmPayment}>
          <Text style={styles.confirmText}>Confirm Payment</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default GpayQr;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
  },
  qrImage: {
    width: 250,
    height: 250,
    marginBottom: 20,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  amount: {
    fontSize: 18,
    marginBottom: 20,
  },
  confirmButton: {
    backgroundColor: '#34A853',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  confirmText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});