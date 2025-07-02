import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const roomImages = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1560448075-bb0bfcf7c6c8?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&w=400&q=80',
];

const SeaViewScreen = () => (
  
  <View style={styles.screenBg}>
    
    {/* <View style={styles.headerRow}>
      <TouchableOpacity style={styles.iconBtn}>
        <Ionicons name="arrow-back" size={26} color="#222" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconBtn}>
        <Ionicons name="ellipsis-vertical" size={24} color="#222" />
      </TouchableOpacity>
    </View> */}
    <Image
      source={{ uri: roomImages[0] }}
      style={styles.mainImage}
      resizeMode="cover"
    />
    <View style={styles.card}>
      <Text style={styles.title}>SeaView Apartment (Juhu, Mumbai)</Text>
      <View style={styles.infoRow}>
        <Ionicons name="location" size={16} color="#4caf50" />
        <Text style={styles.infoText}>4.6km  •  Juhu Beach Map</Text>
      </View>
      <View style={styles.infoRow}>
        <Ionicons name="star" size={16} color="#ffb300" />
        <Text style={styles.infoText}>4.7 Ratings  </Text>
        <Text style={styles.infoText}>(1,700 Reviewers)</Text>
      </View>
      <Text style={styles.sectionTitle}>House Details</Text>
      <Text style={styles.details} numberOfLines={3} ellipsizeMode="tail">
        SeaView Apartment offers a stunning view of Juhu Beach, Mumbai. Enjoy modern amenities, spacious rooms, and easy access to the city’s best attractions. Perfect for families and business travelers alike. ...
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imageScroll}>
        {roomImages.map((img, idx) => (
          <Image key={idx} source={{ uri: img }} style={styles.thumbImg} />
        ))}
      </ScrollView>
      <View style={styles.priceRow}>
        <Text style={styles.priceLabel}>Price</Text>
        <Text style={styles.priceValue}>₹9,500</Text>
        <TouchableOpacity style={styles.bookBtn}
          // onPress={() => navigation.navigate('BookingScreen')}
        >
          <Text style={styles.bookBtnText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  screenBg: {
    flex: 1,
    backgroundColor: '#6ee0f6',
    paddingTop:20,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingTop: 32,
    marginBottom: 8,
  },
  iconBtn: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 6,
    elevation: 2,
  },
  mainImage: {
    width: '92%',
    height: 180,
    borderRadius: 18,
    alignSelf: 'center',
    marginBottom: -32,
    marginTop: 8,
    borderWidth: 2,
    borderColor: '#fff',
  },
  card: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    // marginTop: -24,
    padding: 22,
    flex: 1,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 6,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  infoText: {
    fontSize: 14,
    color: '#555',
    marginLeft: 4,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 22,
    marginBottom: 4,
    color: '#222',
  },
  details: {
    fontSize: 14,
    color: '#444',
    marginBottom: 10,
  },
  imageScroll: {
    flexDirection: 'row',
    marginVertical: 18,
  },
  thumbImg: {
    width: 60,
    height: 60,
    borderRadius: 12,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 50,
  },
  priceLabel: {
    fontSize: 16,
    color: '#888',
    marginRight: 8,
  },
  priceValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
    marginRight: 18,
  },
  bookBtn: {
    backgroundColor: '#222',
    borderRadius: 14,
    paddingHorizontal: 24,
    paddingVertical: 10,
    marginLeft: 'auto',
  },
  bookBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SeaViewScreen;
