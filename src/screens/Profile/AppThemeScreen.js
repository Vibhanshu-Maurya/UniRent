import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const AppThemeScreen = () => {
  const [theme, setTheme] = useState('Light');

  const handleSelect = (selected) => {
    setTheme(selected);
    Alert.alert('Theme Changed', `Theme set to ${selected}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>App Theme</Text>
      <TouchableOpacity style={[styles.themeButton, theme === 'Light' && styles.selected]} onPress={() => handleSelect('Light')}>
        <Text style={styles.themeText}>Light</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.themeButton, theme === 'Dark' && styles.selected]} onPress={() => handleSelect('Dark')}>
        <Text style={styles.themeText}>Dark</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 24, justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 28, textAlign: 'center' },
  themeButton: { padding: 16, borderWidth: 1, borderColor: '#007AFF', borderRadius: 8, marginVertical: 10, backgroundColor: '#fff' },
  selected: { backgroundColor: '#007AFF' },
  themeText: { fontSize: 16, color: '#007AFF', fontWeight: 'bold' },
});

export default AppThemeScreen;
