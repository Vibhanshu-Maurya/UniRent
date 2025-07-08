import { ActivityIndicator, Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'

const Splash = ({ navigation }) => {
  // const [isTouchable, setIsTouchable] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      // setIsTouchable(true);
      navigation.replace('MainScreen');
    }, 1000);
    return () => clearTimeout(timer); 
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={require('../../../assets/SystemImages/roomIcon.png')}
        style={styles.splashImage}
      />
      <Text style={styles.splashText}>UniRent</Text>
      <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 20 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  splashImage: {
    height: 150,
    width: 150,
    borderRadius: 10,
    // backgroundColor:'green',
    backgroundColor: 'none'
  },
  splashText: {
    color: 'orange',
    fontSize: 30,
    fontWeight: '900',
  }
})

export default Splash;