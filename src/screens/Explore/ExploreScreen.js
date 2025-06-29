import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ActivityIndicator, Linking, Platform } from 'react-native';
import * as Location from 'expo-location';

const LocationScreen = () => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleSearch = async () => {
    if (!searchText.trim()) {
      Alert.alert('Input Required', 'Please enter a location name.');
      return;
    }
    setLoading(true);
    try {
      // Geocode the location name
      const geocode = await Location.geocodeAsync(searchText);
      if (geocode.length === 0) {
        Alert.alert('Not Found', 'No coordinates found for this location.');
        setLocation(null);
      } else {
        setLocation(geocode[0]);
      }
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  };

  const openInMaps = (latitude, longitude) => {
    const url = Platform.select({
      ios: `http://maps.apple.com/?ll=${latitude},${longitude}`,
      android: `geo:${latitude},${longitude}?q=${latitude},${longitude}`,
      default: `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`
    });
    Linking.openURL(url);
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Room Service Location</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter location name..."
        value={searchText}
        onChangeText={setSearchText}
      />
      <Button title="Search" onPress={handleSearch} />
      {loading && <ActivityIndicator size="large" color="#007AFF" style={{ marginTop: 20 }} />}
      {location && (
        <View style={styles.resultBox}>
          <Text style={styles.text}>Latitude: {location.latitude}</Text>
          <Text style={styles.text}>Longitude: {location.longitude}</Text>
          <Text
            style={[styles.text, { color: '#007AFF', marginTop: 10, textDecorationLine: 'underline' }]}
            onPress={() => openInMaps(location.latitude, location.longitude)}
          >
            View on Map
          </Text>
        </View>
      )}
    </View>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginBottom: 20,
  },
  resultBox: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#F0F8FF',
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
  },
});