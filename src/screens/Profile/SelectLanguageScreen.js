import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, FlatList } from 'react-native';

const LANGUAGES = ['English', 'Hindi', 'Spanish', 'French', 'German'];

const SelectLanguageScreen = () => {
  const [selected, setSelected] = useState('English');

  const handleSelect = (lang) => {
    setSelected(lang);
    Alert.alert('Language Changed', `Language set to ${lang}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Language</Text>
      <FlatList
        data={LANGUAGES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.langButton, selected === item && styles.selected]}
            onPress={() => handleSelect(item)}
          >
            <Text style={[styles.langText, selected === item && styles.selectedText]}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View> 
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 24, justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 28, textAlign: 'center' },
  langButton: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 8,
    marginVertical: 8,
    backgroundColor: '#fff',
  },
  selected: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  langText: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: 'bold',
  },
  selectedText: {
    color: '#fff',
  },
});

export default SelectLanguageScreen;
