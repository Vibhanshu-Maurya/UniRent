import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const dummyReviews = [
  { id: '1', reviewer: 'Amit', rating: 5, comment: 'Great experience!' },
  { id: '2', reviewer: 'Priya', rating: 4, comment: 'Nice property.' },
];

const ReviewsScreen = () => {
  const [reviews] = useState(dummyReviews);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Reviews</Text>
      <FlatList
        data={reviews}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.reviewItem}>
            <Text style={styles.reviewer}>{item.reviewer}</Text>
            <Text style={styles.rating}>Rating: {item.rating} ★</Text>
            <Text style={styles.comment}>{item.comment}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>No reviews yet.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 24 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  reviewItem: { paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: '#eee' },
  reviewer: { fontWeight: 'bold', fontSize: 15 },
  rating: { color: '#007AFF', fontWeight: 'bold' },
  comment: { color: '#333', marginTop: 4 },
  empty: { color: '#888', textAlign: 'center', marginTop: 20 },
});

export default ReviewsScreen;
