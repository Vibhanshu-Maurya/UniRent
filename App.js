import { View, Text } from 'react-native'
import React from 'react'
import AppNavigator from './src/navigation/AppNavigator'
// import MainScreen from './Components/HOME/MainScreen'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ProfileProvider } from './src/screens/Profile/ProfileContext';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ProfileProvider>
        <AppNavigator />
      </ProfileProvider>
    </GestureHandlerRootView>
  )
}

export default App;