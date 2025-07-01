import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const cityTownImages = [
  'https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1560448075-bb0bfcf7c6c8?auto=format&fit=crop&w=400&q=80',
];

const CityTownScreen = () => (
  <View style={styles.screenBg}>
    <Image
      source={{ uri: cityTownImages[0] }}
      style={styles.mainImage}
      resizeMode="cover"
    />
    <View style={styles.card}>
      <Text style={styles.title}>City Town (Banjara, Hyderabad)</Text>
      <View style={styles.infoRow}>
        <Ionicons name="location" size={16} color="#4caf50" />
        <Text style={styles.infoText}>5.2km  •  Banjara Hills Map</Text>
      </View>
      <View style={styles.infoRow}>
        <Ionicons name="star" size={16} color="#ffb300" />
        <Text style={styles.infoText}>4.4 Ratings  </Text>
        <Text style={styles.infoText}>(1,200 Reviewers)</Text>
      </View>
      <Text style={styles.sectionTitle}>House Details</Text>
      <Text style={styles.details} numberOfLines={3} ellipsizeMode="tail">
        City Town is a premium townhouse in Hyderabad’s Banjara Hills. Spacious, well-furnished, and close to major attractions. Ideal for families and business travelers. ...
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imageScroll}>
        {cityTownImages.map((img, idx) => (
          <Image key={idx} source={{ uri: img }} style={styles.thumbImg} />
        ))}
      </ScrollView>
      <View style={styles.priceRow}>
        <Text style={styles.priceLabel}>Price</Text>
        <Text style={styles.priceValue}>₹7,800</Text>
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
  infoText: { fontSize: 14, marginLeft: 4 },
  sectionTitle: { fontSize: 18, fontWeight: '500', marginTop: 12, marginBottom: 8 },
  details: { fontSize: 14, color: '#333', lineHeight: 20 },
  imageScroll: { marginTop: 8, marginBottom: 16 },
  thumbImg: { width: 100, height: 100, borderRadius: 8, marginRight: 8 },
  priceRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  priceLabel: { fontSize: 16, fontWeight: '500' },
  priceValue: { fontSize: 20, fontWeight: 'bold', color: '#e91e63' },
  bookBtn: {
    backgroundColor: '#e91e63',
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  bookBtnText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

export default CityTownScreen;
