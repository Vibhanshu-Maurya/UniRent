import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const dummyQA = [
  { id: '1', question: 'Is parking available?', answer: 'Yes, parking is available.' },
  { id: '2', question: 'Are pets allowed?', answer: 'No, pets are not allowed.' },
];

const QuestionsAnswersScreen = () => {
  const [expanded, setExpanded] = useState(null);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Questions & Answers</Text>
      <FlatList
        data={dummyQA}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.qaItem}>
            <TouchableOpacity onPress={() => setExpanded(expanded === item.id ? null : item.id)}>
              <Text style={styles.question}>{item.question}</Text>
            </TouchableOpacity>
            {expanded === item.id && <Text style={styles.answer}>{item.answer}</Text>}
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>No questions yet.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 24 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  qaItem: { paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: '#eee' },
  question: { fontWeight: 'bold', fontSize: 15, color: '#007AFF' },
  answer: { color: '#333', marginTop: 4 },
  empty: { color: '#888', textAlign: 'center', marginTop: 20 },
});

export default QuestionsAnswersScreen;
