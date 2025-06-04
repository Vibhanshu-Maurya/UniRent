import { StyleSheet,StatusBar, Text, View,Button } from 'react-native'
import React, { useState } from 'react'

const StatusBar = () => {
    const [hide,setHide] = useState(false);
    cosnt [barStyle,setBarStyle] = useState('default');
  return (
    <View>
      <StatusBar
        backgroundColor='blue'
        barStyle = {barStyle}
        hidden={hide}
        />
    </View>
  )
}

export default StatusBar

const styles = StyleSheet.create({

})