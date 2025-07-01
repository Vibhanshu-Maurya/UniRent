import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const LocationScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn}>
          <Icon name="chevron-back" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Location Map</Text>
      </View>
      {/* Map Placeholder with route line and markers (static image for now) */}
      <View style={styles.mapContainer}>
        <Image
          source={require('../../../assets/Screenshot 2025-06-30 144537.png')}
          style={styles.mapImage}
          resizeMode="cover"
        />
      </View>
      {/* Info Card */}
      <View style={styles.infoCard}>
        <View style={styles.profileRow}>
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
            style={styles.avatar}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.name}>Ronald Richards</Text>
            <View style={styles.starsRow}>
              {[...Array(5)].map((_, i) => (
                <Icon key={i} name="star" size={16} color="#FFD600" />
              ))}
            </View>
          </View>
          <Icon name="call" size={22} color="#007AFF" style={{ marginHorizontal: 8 }} />
          <Icon name="chatbubble-ellipses" size={22} color="#007AFF" />
        </View>
        <View style={styles.infoRow}>
          <Icon name="location" size={18} color="#007AFF" style={{ marginRight: 8 }} />
          <View>
            <Text style={styles.infoLabel}>Your Delivery Address</Text>
            <Text style={styles.infoValue}>11 New Market, New work, USA</Text>
          </View>
        </View>
        <View style={styles.infoRow}>
          <Icon name="time" size={18} color="#007AFF" style={{ marginRight: 8 }} />
          <View>
            <Text style={styles.infoLabel}>Your Delivery Time</Text>
            <Text style={styles.infoValue}>20-25 min (on the way)</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.liveBtn}>
          <Text style={styles.liveBtnText}>Live Tracking</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f7fa' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#222e3a',
    paddingTop: 48,
    paddingBottom: 18,
    paddingHorizontal: 18,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  backBtn: { marginRight: 10 },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    marginRight: 28, // to balance the back icon
  },
  mapContainer: {
    height: 240,
    backgroundColor: '#e0e0e0',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    overflow: 'hidden',
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
  infoCard: {
    backgroundColor: '#fff',
    marginHorizontal: 18,
    marginTop: -40,
    borderRadius: 20,
    padding: 18,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 2,
  },
  starsRow: {
    flexDirection: 'row',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoLabel: {
    color: '#888',
    fontSize: 13,
  },
  infoValue: {
    color: '#222e3a',
    fontWeight: 'bold',
    fontSize: 15,
  },
  liveBtn: {
    backgroundColor: '#222e3a',
    borderRadius: 12,
    marginTop: 18,
    paddingVertical: 14,
    alignItems: 'center',
  },
  liveBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1,
  },
});

export default LocationScreen;
