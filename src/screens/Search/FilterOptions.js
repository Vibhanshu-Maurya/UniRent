import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';

const roomTypes = ['1 BHK', '2 BHK', '3 BHK', '4+ BHK'];
const locations = ['Varanasi', 'Mumbai', 'Delhi', 'Simla', 'Bangalore'];

const FilterOptions = ({ navigation }) => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleApply = () => {
    // You can pass these values back or use a context/store
    navigation && navigation.goBack();
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{paddingBottom: 32}}>
      {/* <Text style={styles.header}>Filter</Text> */}
      <Text style={styles.label}>Room Area</Text>
      <View style={styles.rowWrap}>
        {roomTypes.map(type => (
          <TouchableOpacity
            key={type}
            style={[styles.chip, selectedRoom === type && styles.chipSelected]}
            onPress={() => setSelectedRoom(type)}
          >
            <Text style={[styles.chipText, selectedRoom === type && styles.chipTextSelected]}>{type}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.label}>Location</Text>
      <View style={styles.rowWrap}>
        {locations.map(loc => (
          <TouchableOpacity
            key={loc}
            style={[styles.chip, selectedLocation === loc && styles.chipSelected]}
            onPress={() => setSelectedLocation(loc)}
          >
            <Text style={[styles.chipText, selectedLocation === loc && styles.chipTextSelected]}>{loc}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.label}>Price Range</Text>
      <View style={styles.priceRow}>
        <TextInput
          style={styles.priceInput}
          placeholder="Min"
          keyboardType="numeric"
          value={minPrice}
          onChangeText={setMinPrice}
        />
        <Text style={{marginHorizontal: 8, fontSize: 16}}>-</Text>
        <TextInput
          style={styles.priceInput}
          placeholder="Max"
          keyboardType="numeric"
          value={maxPrice}
          onChangeText={setMaxPrice}
        />
      </View>
      <TouchableOpacity style={styles.applyBtn} onPress={handleApply}>
        <Text style={styles.applyBtnText}>Apply Filter</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FB',
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 18,
    color: '#222',
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 18,
    marginBottom: 8,
    color: '#222',
  },
  rowWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  chip: {
    backgroundColor: '#e0e0e0',
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 10,
    marginBottom: 10,
  },
  chipSelected: {
    backgroundColor: '#4fd1f9',
  },
  chipText: {
    color: '#222',
    fontWeight: '500',
  },
  chipTextSelected: {
    color: '#fff',
    fontWeight: 'bold',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  priceInput: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    paddingHorizontal: 14,
    paddingVertical: 8,
    width: 90,
    fontSize: 16,
  },
  applyBtn: {
    backgroundColor: '#222e3a',
    borderRadius: 14,
    marginTop: 24,
    paddingVertical: 14,
    alignItems: 'center',
  },
  applyBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1,
  },
});

export default FilterOptions;