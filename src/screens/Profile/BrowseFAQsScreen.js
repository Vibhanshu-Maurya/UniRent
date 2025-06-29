import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const dummyFAQs = [
  { id: '1', question: 'How do I book a property?', answer: 'Go to Explore, select a property, and click Book.' },
  { id: '2', question: 'How do I contact support?', answer: 'Go to Profile > Contact Support.' },
];

const BrowseFAQsScreen = () => {
  const [expanded, setExpanded] = useState(null);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Browse FAQs</Text>
      <FlatList
        data={dummyFAQs}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.faqItem}>
            <TouchableOpacity onPress={() => setExpanded(expanded === item.id ? null : item.id)}>
              <Text style={styles.question}>{item.question}</Text>
            </TouchableOpacity>
            {expanded === item.id && <Text style={styles.answer}>{item.answer}</Text>}
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>No FAQs yet.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 24 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  faqItem: { paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: '#eee' },
  question: { fontWeight: 'bold', fontSize: 15, color: '#007AFF' },
  answer: { color: '#333', marginTop: 4 },
  empty: { color: '#888', textAlign: 'center', marginTop: 20 },
});

export default BrowseFAQsScreen;
