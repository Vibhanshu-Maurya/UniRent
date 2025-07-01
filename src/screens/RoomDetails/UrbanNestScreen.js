import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const urbanNestImages = [
  'https://images.unsplash.com/photo-1560448075-bb0bfcf7c6c8?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&w=400&q=80',
];

const UrbanNestScreen = () => (
  <View style={styles.screenBg}>
    <Image
      source={{ uri: urbanNestImages[0] }}
      style={styles.mainImage}
      resizeMode="cover"
    />
    <View style={styles.card}>
      <Text style={styles.title}>Urban Nest (Indira, Bangalore)</Text>
      <View style={styles.infoRow}>
        <Ionicons name="location" size={16} color="#4caf50" />
        <Text style={styles.infoText}>2.5km  •  Indira Nagar Map</Text>
      </View>
      <View style={styles.infoRow}>
        <Ionicons name="star" size={16} color="#ffb300" />
        <Text style={styles.infoText}>4.6 Ratings  </Text>
        <Text style={styles.infoText}>(1,800 Reviewers)</Text>
      </View>
      <Text style={styles.sectionTitle}>House Details</Text>
      <Text style={styles.details} numberOfLines={3} ellipsizeMode="tail">
        Urban Nest is a modern apartment in Bangalore’s Indira Nagar. Enjoy city views, contemporary design, and all essential amenities for a comfortable stay. ...
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imageScroll}>
        {urbanNestImages.map((img, idx) => (
          <Image key={idx} source={{ uri: img }} style={styles.thumbImg} />
        ))}
      </ScrollView>
      <View style={styles.priceRow}>
        <Text style={styles.priceLabel}>Price</Text>
        <Text style={styles.priceValue}>₹8,000</Text>
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
    padding: 15,
    margin: 10,
    elevation: 3,
  },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  infoRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 5 },
  infoText: { marginLeft: 5, fontSize: 16, color: '#333' },
  sectionTitle: { fontSize: 18, fontWeight: '600', marginTop: 10 },
  details: { fontSize: 14, color: '#666', marginTop: 5 },
  imageScroll: { marginTop: 10, paddingVertical: 10 },
  thumbImg: { width: 100, height: 100, borderRadius: 8, marginRight: 10 },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 10,
  },
  priceLabel: { fontSize: 16, color: '#333' },
  priceValue: { fontSize: 18, fontWeight: 'bold', color: '#e91e63' },
  bookBtn: {
    backgroundColor: '#e91e63',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  bookBtnText: { color: '#fff', fontSize: 16, fontWeight: '500' },
});

export default UrbanNestScreen;
