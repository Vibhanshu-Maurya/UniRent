import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity, Modal, Pressable } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const royalVillaImages = [
  'https://media.istockphoto.com/id/2021707621/photo/night-scene-modern-style-luxury-black-master-bedroom-with-city-view-3d-render.jpg?s=2048x2048&w=is&k=20&c=2bJeNTK8HPMLBsdBIHwuF6pz6K_LSioV91pupbq_ZqE=',
  'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80',
  'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&w=400&q=80',
];

const ApartmentPrayarag = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigation = useNavigation();

  const roomPrice = 2500;
  const roomTitle = "Apartment, Prayagraj";
  const roomImage = royalVillaImages[0];
  // TODO: Replace with real IDs from your app's user/session and room DB
  const userId = 1; // <-- Make sure this user exists in your MySQL users table
  const roomId = 1; // <-- Make sure this room exists in your MySQL rooms table

  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={{ position: 'relative' }}>
          <Image
            source={{ uri: roomImage }}
            style={{ width: '100%', height: 400 }}
            resizeMode="cover"
          />
          <LinearGradient
            colors={["transparent", "#fff"]}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              height: 80,
              width: width,
            }}
          />
        </View>

        <View style={{ padding: 20, marginTop: -50 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 22 }}>Apartment</Text>
          <Text style={{ color: '#888', marginBottom: 10 }}>{roomTitle}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
            <Text style={{ fontSize: 18, color: '#222' }}>₹{roomPrice}</Text>
            <Text style={{ fontSize: 18, color: '#222' }}>★5.0</Text>
          </View>
        </View>

        <View style={styles.cardContainer}>
          <View style={styles.tagsContainer}>
            <TouchableOpacity><Text style={styles.tag}>2 bedrooms</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.tag}>Good location</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.tag}>Privacy</Text></TouchableOpacity>
          </View>

          <Text style={styles.description}>
            Enjoy a comfortable stay in this beautifully designed apartment
            featuring two spacious bedrooms, a peaceful environment, and a location
            close to markets, schools, and transport. Ideal for families, students,
            or working professionals seeking privacy and convenience.
          </Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imageScroll}>
            {royalVillaImages.map((img, idx) => (
              <TouchableOpacity
                key={idx}
                onPress={() => {
                  setSelectedImage(img);
                  setModalVisible(true);
                }}
              >
                <Image source={{ uri: img }} style={styles.thumbImg} />
              </TouchableOpacity>
            ))}
          </ScrollView>

          <View flexDirection="row">
            <Text style={{ textAlignVertical: 'center', marginLeft: 10, fontWeight: '600', fontSize: 17 }}>
              ₹{roomPrice}/month
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('PaymentScreen', {
                roomPrice,
                roomTitle,
                roomImage,
                userId, // pass userId
                roomId, // pass roomId
              })}
            >
              <Text style={styles.buttonText}>Book Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Modal visible={modalVisible} transparent animationType="fade" onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <Pressable style={styles.modalBackground} onPress={() => setModalVisible(false)}>
            <Image source={{ uri: selectedImage }} style={styles.fullscreenImage} resizeMode="contain" />
          </Pressable>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default ApartmentPrayarag;

const styles = StyleSheet.create({
  cardContainer: { backgroundColor: '#fff', padding: 20, paddingTop: 0 },
  tagsContainer: { flexDirection: 'row', marginBottom: 15, flexWrap: 'wrap', gap: 8 },
  tag: {
    backgroundColor: '#f0f2f8', paddingVertical: 6, paddingHorizontal: 12,
    borderRadius: 20, color: '#444', fontSize: 14, marginRight: 8,
  },
  description: { color: '#777', fontSize: 14, lineHeight: 22, marginBottom: 20 },
  button: {
    backgroundColor: 'green',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    width: 120,
    left: 75,
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  imageScroll: { marginTop: 10, marginBottom: 15 },
  thumbImg: {
    width: 100, height: 100, borderRadius: 8, marginRight: 10,
    borderWidth: 2, borderColor: 'transparent',
  },
  modalContainer: {
    flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.9)',
    justifyContent: 'center', alignItems: 'center',
  },
  modalBackground: {
    width: '100%', height: '100%',
    justifyContent: 'center', alignItems: 'center',
  },
  fullscreenImage: {
    width: '90%', height: '70%', borderRadius: 10,
  },
});
