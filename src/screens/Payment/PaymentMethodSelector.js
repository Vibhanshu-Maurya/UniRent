import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

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

const PaymentMethodSelector = ({ roomPrice }) => {
  const [selectedMethod, setSelectedMethod] = useState('Google Pay');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handlePay = () => {
    if (selectedMethod !== 'Google Pay') {
      Alert.alert('Not Supported', 'Currently only Google Pay is supported for payment.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigation.navigate('GpayQr', {
        roomPrice,
        methodName: selectedMethod,
      });
    }, 1000);
  };

  return (
    <View style={styles.container}>
      {paymentMethods.map((method) => {
        const isSelected = selectedMethod === method.name;

        return (
          <TouchableOpacity
            key={method.name}
            onPress={() => setSelectedMethod(method.name)}
            style={[
              styles.optionContainer,
              isSelected && styles.selectedBorder,
            ]}
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
                    {selectedMethod === 'Google Pay' ? (
                      <>
                        Pay <Text style={{ fontWeight: 'bold' }}>₹{roomPrice}</Text>
                      </>
                    ) : (
                      'Only Google Pay supported'
                    )}
                  </Text>
                )}
              </TouchableOpacity>
            )}
          </TouchableOpacity>
        );
      })}
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
});