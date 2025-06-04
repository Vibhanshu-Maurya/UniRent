// src/components/CategoryButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CategoryButton = ({ label, onPress, selected }) => (
  <TouchableOpacity
    style={[styles.button, selected && styles.selectedButton]}
    onPress={onPress}
    activeOpacity={0.7}
  >
    <Text style={[styles.text, selected && styles.selectedText]}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    borderColor: '#4CAF50',
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedButton: {
    backgroundColor: '#4CAF50',
  },
  text: {
    color: '#4CAF50',
    fontWeight: '600',
  },
  selectedText: {
    color: '#fff',
  },
});

export default CategoryButton;
