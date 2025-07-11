import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  ActivityIndicator,
  Modal,
  TextInput,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const paymentMethods = [
  {
    name: 'Paytm',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Paytm_logo.png',
  },
  {
    name: 'Google Pay',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Google_Pay_%28GPay%29_Logo.svg',
  },
  {
    name: 'PhonePe',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/PhonePe_Logo.svg',
  },
  {
    name: 'Add new UPI ID',
    logo: null,
    extraText: 'How to find?',
  },
];

const PaymentMethodSelector = (props) => {
  const route = useRoute();
  const navigation = useNavigation();

  const {
    userId = 1,
    roomId = 1,
    roomPrice = 2500,
    roomTitle = 'Room A',
  } = (route.params && Object.keys(route.params).length > 0
    ? route.params
    : props) || {};

  const [selectedMethod, setSelectedMethod] = useState('Google Pay');
  const [loading, setLoading] = useState(false);
  const [upiModalVisible, setUpiModalVisible] = useState(false);
  const [upiId, setUpiId] = useState('');

  // Simulated booking + payment flow (no backend)
  const handlePay = () => {
    if (loading) return;

    if (selectedMethod !== 'Google Pay') {
      Alert.alert('Not Supported', 'Currently only Google Pay is supported.');
      return;
    }

    Alert.alert(
      'Confirm Payment',
      `Do you want to book ${roomTitle} for ₹${roomPrice.toLocaleString('en-IN')}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Pay',
          onPress: () => {
            setLoading(true);

            // Simulate async booking and payment
            setTimeout(() => {
              setLoading(false);

              // Navigate to QR screen after payment success
              navigation.navigate('GpayQr', {
                bookingId: 'simulated-booking-id',
                roomPrice,
              });
            }, 2000);
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      {paymentMethods.map((method) => {
        const isSelected = selectedMethod === method.name;

        return (
          <TouchableOpacity
            key={method.name}
            onPress={() => {
              setSelectedMethod(method.name);
              if (method.name === 'Add new UPI ID') {
                setUpiModalVisible(true);
              }
            }}
            style={[styles.optionContainer, isSelected && styles.selectedBorder]}
          >
            <View style={styles.radioRow}>
              <View style={styles.radioCircle}>
                {isSelected && <View style={styles.selectedDot} />}
              </View>
              <Text style={styles.optionText}>{method.name}</Text>

              {method.logo && (
                <Image source={{ uri: method.logo }} style={styles.logo} />
              )}
              {method.extraText && (
                <Text style={styles.howToText}>{method.extraText}</Text>
              )}
            </View>

            {isSelected && (
              <TouchableOpacity
                style={[
                  styles.payButton,
                  selectedMethod !== 'Google Pay' && styles.disabledButton,
                ]}
                onPress={handlePay}
                disabled={selectedMethod !== 'Google Pay' || loading}
              >
                {loading ? (
                  <ActivityIndicator color="#fff" />
                ) : (
                  <Text
                    style={[
                      styles.payButtonText,
                      selectedMethod !== 'Google Pay' && styles.disabledText,
                    ]}
                  >
                    {selectedMethod === 'Google Pay'
                      ? `Pay ₹${roomPrice.toLocaleString('en-IN')}`
                      : 'Only Google Pay supported'}
                  </Text>
                )}
              </TouchableOpacity>
            )}
          </TouchableOpacity>
        );
      })}

      <Modal
        visible={upiModalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setUpiModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text
              style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 10 }}
            >
              Enter your UPI ID
            </Text>
            <TextInput
              placeholder="example@upi"
              value={upiId}
              onChangeText={setUpiId}
              style={styles.input}
            />
            <TouchableOpacity
              onPress={() => {
                setUpiModalVisible(false);
                Alert.alert(
                  'Note',
                  'Currently UPI ID entry is just a placeholder.'
                );
              }}
              style={styles.modalButton}
            >
              <Text style={styles.modalButtonText}>Save UPI ID</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setUpiModalVisible(false)}>
              <Text style={{ color: 'red', marginTop: 10 }}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PaymentMethodSelector;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  optionContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  selectedDot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#007AFF',
  },
  optionText: {
    fontSize: 16,
    flex: 1,
  },
  logo: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  howToText: {
    color: '#007AFF',
    fontSize: 14,
  },
  payButton: {
    marginTop: 10,
    backgroundColor: '#34A853',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  payButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  selectedBorder: {
    borderColor: '#007AFF',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  disabledText: {
    color: '#555',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '85%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    elevation: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 10,
    width: '100%',
    marginBottom: 10,
  },
  modalButton: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
