import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import {HouseView1} from './HouseView1';
import { styles } from '../../HomeStyles';

const House = (props) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate("HouseView1")}
      >
        <Text>Inside House Screen</Text>
      </TouchableOpacity>
    </View>
  )
}

export default House; 