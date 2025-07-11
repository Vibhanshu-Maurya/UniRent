import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PriyaSinghScreen = () => (
  <View style={styles.container}>
    <Image
      source={require('../../../assets/SystemImages/vmm.jpg')}
      style={styles.avatar}
    />
    <Text style={styles.name}>Vibhanshu Maurya</Text>
    <Text style={styles.title}>🏆 Top User</Text>
    <Text style={styles.stats}>Offers Completed: <Text style={styles.bold}>120</Text></Text>
    <Text style={styles.stats}>User Rating: <Text style={styles.bold}>5.0 ★</Text></Text>
    <View style={styles.badgeContainer}>
      <Text style={styles.badge}>Verified</Text>
      <Text style={styles.badge}>Superhost</Text>
    </View>
    <Text style={styles.bio}>
      Vibhanshu Maurya is a highly rated host, known for her warm hospitality and attention to detail. She has helped many guests enjoy comfortable stays in top Indian cities.
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f8fc',
    padding: 24,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 16,
    borderWidth: 3,
    borderColor: '#4e9cff',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 4,
  },
  title: {
    fontSize: 18,
    color: '#ffb300',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  stats: {
    fontSize: 16,
    color: '#444',
    marginBottom: 2,
  },
  bold: {
    fontWeight: 'bold',
    color: '#222',
  },
  badgeContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  badge: {
    backgroundColor: '#4e9cff',
    color: '#fff',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginHorizontal: 4,
    fontSize: 13,
    fontWeight: 'bold',
  },
  bio: {
    marginTop: 18,
    fontSize: 15,
    color: '#555',
    textAlign: 'center',
    lineHeight: 22,
  },
});

export default PriyaSinghScreen;
