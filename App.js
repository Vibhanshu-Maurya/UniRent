import { View, Text } from 'react-native'
import React from 'react'
import AppNavigator from './Components/AppNavigator'
import MainScreen from './Components/HOME/MainScreen'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppNavigator/>
    </GestureHandlerRootView>
  )
}

export default App