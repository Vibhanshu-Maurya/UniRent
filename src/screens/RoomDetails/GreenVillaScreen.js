import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const greenVillaImages = [
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1560448075-bb0bfcf7c6c8?auto=format&fit=crop&w=400&q=80',
];

const GreenVillaScreen = () => (
  <View style={styles.screenBg}>
    <Image
      source={{ uri: greenVillaImages[0] }}
      style={styles.mainImage}
      resizeMode="cover"
    />
    <View style={styles.card}>
      <Text style={styles.title}>Green Villa (SaltLake, Kolkata)</Text>
      <View style={styles.infoRow}>
        <Ionicons name="location" size={16} color="#4caf50" />
        <Text style={styles.infoText}>3.9km  •  SaltLake Map</Text>
      </View>
      <View style={styles.infoRow}>
        <Ionicons name="star" size={16} color="#ffb300" />
        <Text style={styles.infoText}>4.1 Ratings  </Text>
        <Text style={styles.infoText}>(1,000 Reviewers)</Text>
      </View>
      <Text style={styles.sectionTitle}>Villa Details</Text>
      <Text style={styles.details} numberOfLines={3} ellipsizeMode="tail">
        Green Villa is a beautiful villa in Kolkata’s SaltLake. Surrounded by greenery, it offers peace, comfort, and all modern facilities. ...
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imageScroll}>
        {greenVillaImages.map((img, idx) => (
          <Image key={idx} source={{ uri: img }} style={styles.thumbImg} />
        ))}
      </ScrollView>
      <View style={styles.priceRow}>
        <Text style={styles.priceLabel}>Price</Text>
        <Text style={styles.priceValue}>₹7,900</Text>
        <TouchableOpacity style={styles.bookBtn}>
          <Text style={styles.bookBtnText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  screenBg: { flex: 1, backgroundColor: '#f2f8fc' },
  mainImage: { width: '100%', height: 250 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  infoRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 4 },
  infoText: { marginLeft: 4, fontSize: 14, color: '#333' },
  sectionTitle: { fontSize: 18, fontWeight: '600', marginTop: 12, marginBottom: 8 },
  details: { fontSize: 14, color: '#666', lineHeight: 20 },
  imageScroll: { marginTop: 8, marginBottom: 16 },
  thumbImg: { width: 100, height: 100, borderRadius: 8, marginRight: 8 },
  priceRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  priceLabel: { fontSize: 16, color: '#333' },
  priceValue: { fontSize: 20, fontWeight: 'bold', color: '#e91e63' },
  bookBtn: {
    backgroundColor: '#4caf50',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  bookBtnText: { color: '#fff', fontSize: 16, fontWeight: '500' },
});

export default GreenVillaScreen;
