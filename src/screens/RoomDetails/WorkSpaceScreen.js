import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const workSpaceImages = [
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1560448075-bb0bfcf7c6c8?auto=format&fit=crop&w=400&q=80',
];

const WorkSpaceScreen = () => (
  <View style={styles.screenBg}>
    <Image
      source={{ uri: workSpaceImages[0] }}
      style={styles.mainImage}
      resizeMode="cover"
    />
    <View style={styles.card}>
      <Text style={styles.title}>WorkSpace (Koregaon, Pune)</Text>
      <View style={styles.infoRow}>
        <Ionicons name="location" size={16} color="#4caf50" />
        <Text style={styles.infoText}>3.2km  •  Koregaon Park Map</Text>
      </View>
      <View style={styles.infoRow}>
        <Ionicons name="star" size={16} color="#ffb300" />
        <Text style={styles.infoText}>4.3 Ratings  </Text>
        <Text style={styles.infoText}>(1,100 Reviewers)</Text>
      </View>
      <Text style={styles.sectionTitle}>Office Details</Text>
      <Text style={styles.details} numberOfLines={3} ellipsizeMode="tail">
        WorkSpace is a modern office space in Pune’s Koregaon Park. Fully equipped, centrally located, and ideal for startups and professionals. ...
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imageScroll}>
        {workSpaceImages.map((img, idx) => (
          <Image key={idx} source={{ uri: img }} style={styles.thumbImg} />
        ))}
      </ScrollView>
      <View style={styles.priceRow}>
        <Text style={styles.priceLabel}>Price</Text>
        <Text style={styles.priceValue}>₹7,500</Text>
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  infoRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 5 },
  infoText: { fontSize: 14, marginLeft: 5 },
  sectionTitle: { fontSize: 18, fontWeight: '500', marginTop: 10, marginBottom: 5 },
  details: { fontSize: 14, color: '#333', lineHeight: 20 },
  imageScroll: { marginTop: 10, marginBottom: 15 },
  thumbImg: { width: 100, height: 100, borderRadius: 8, marginRight: 10 },
  priceRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  priceLabel: { fontSize: 16, fontWeight: '500' },
  priceValue: { fontSize: 20, fontWeight: 'bold', color: '#e91e63' },
  bookBtn: {
    backgroundColor: '#4caf50',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  bookBtnText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

export default WorkSpaceScreen;
