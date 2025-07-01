import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const skylineImages = [
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1560448075-bb0bfcf7c6c8?auto=format&fit=crop&w=400&q=80',
];

const SkylineScreen = () => (
  <View style={styles.screenBg}>
    <Image
      source={{ uri: skylineImages[0] }}
      style={styles.mainImage}
      resizeMode="cover"
    />
    <View style={styles.card}>
      <Text style={styles.title}>Skyline (T.Nagar, Chennai)</Text>
      <View style={styles.infoRow}>
        <Ionicons name="location" size={16} color="#4caf50" />
        <Text style={styles.infoText}>4.1km  •  T.Nagar Map</Text>
      </View>
      <View style={styles.infoRow}>
        <Ionicons name="star" size={16} color="#ffb300" />
        <Text style={styles.infoText}>4.2 Ratings  </Text>
        <Text style={styles.infoText}>(900 Reviewers)</Text>
      </View>
      <Text style={styles.sectionTitle}>Apartment Details</Text>
      <Text style={styles.details} numberOfLines={3} ellipsizeMode="tail">
        Skyline is a premium apartment in Chennai’s T.Nagar. Modern design, great views, and all amenities for a comfortable urban lifestyle. ...
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imageScroll}>
        {skylineImages.map((img, idx) => (
          <Image key={idx} source={{ uri: img }} style={styles.thumbImg} />
        ))}
      </ScrollView>
      <View style={styles.priceRow}>
        <Text style={styles.priceLabel}>Price</Text>
        <Text style={styles.priceValue}>₹8,200</Text>
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
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  infoRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 5 },
  infoText: { marginLeft: 5, fontSize: 14, color: '#333' },
  sectionTitle: { fontSize: 18, fontWeight: '500', marginTop: 10, marginBottom: 5 },
  details: { fontSize: 14, color: '#666' },
  imageScroll: { marginTop: 10, marginBottom: 10 },
  thumbImg: { width: 100, height: 100, borderRadius: 8, marginRight: 10 },
  priceRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 },
  priceLabel: { fontSize: 16, fontWeight: '500' },
  priceValue: { fontSize: 18, fontWeight: 'bold', color: '#e91e63' },
  bookBtn: {
    backgroundColor: '#e91e63',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  bookBtnText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

export default SkylineScreen;
