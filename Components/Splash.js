import { ActivityIndicator, Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'

const Splash = ({ navigation }) => {
  // const [isTouchable, setIsTouchable] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      // setIsTouchable(true);
      navigation.navigate('MainScreen');  
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <Image
        // source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4jaGUCbhD4Ct6ibmvC_3leOPiLdmjS6fNiQ&s' }}
        source={require('../IMAG/homeicon.png')}
        style={styles.splashImage}
      />

      {
        // !isTouchable && 
        (
          <ActivityIndicator size="large" color="#0000ff" style={{ marginBottom: 20 }} />
        )

      }


      {/* <TouchableOpacity
        disabled={!isTouchable}
        onPress={() => navigation.navigate('MainScreen')}
        style={{
          backgroundColor: isTouchable ? 'orange' : 'gray',
          padding: 15,
          borderRadius: 10,
        }}
      >
        <Text style={styles.splashText}>
          {isTouchable ? 'UniRent' : 'Please wait...'}
        </Text>
      </TouchableOpacity> */}
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
    color: 'white',
    fontSize: 30,
    fontWeight: '600',
  }
})

export default Splash;