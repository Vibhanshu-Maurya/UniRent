import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert } from 'react-native';

const SavedCardsScreen = () => {
  const [cards, setCards] = useState([]);
  const [cardNumber, setCardNumber] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAddCard = () => {
    if (!/^\d{16}$/.test(cardNumber)) {
      Alert.alert('Error', 'Enter a valid 16-digit card number.');
      return;
    }
    setCards([...cards, cardNumber]);
    setCardNumber('');
  };

  const handleRemoveCard = (number) => {
    setCards(cards.filter(card => card !== number));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saved Cards</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Card Number"
        value={cardNumber}
        onChangeText={setCardNumber}
        keyboardType="number-pad"
        maxLength={16}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddCard} disabled={loading}>
        <Text style={styles.buttonText}>Add Card</Text>
      </TouchableOpacity>
      <FlatList
        data={cards}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={styles.cardItem}>
            <Text style={styles.cardText}>{item.replace(/\d{12}(\d{4})/, '**** **** **** $1')}</Text>
            <TouchableOpacity onPress={() => handleRemoveCard(item)}>
              <Text style={styles.removeText}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>No cards saved.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 24 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, marginBottom: 12, fontSize: 16 },
  button: { backgroundColor: '#007AFF', paddingVertical: 12, borderRadius: 8, alignItems: 'center', marginBottom: 16 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  cardItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#eee' },
  cardText: { fontSize: 16 },
  removeText: { color: 'red', fontWeight: 'bold' },
  emptyText: { color: '#888', textAlign: 'center', marginTop: 20 },
});

export default SavedCardsScreen;
