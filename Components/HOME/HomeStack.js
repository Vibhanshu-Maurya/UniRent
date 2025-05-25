import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
// import { SearchScreen } from './SearchScreen';
import Notification from './Notification';
import Filter from './Filter';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="HomeMain" component={Home} 
          options={{headerShown:false}}
        />
        <Stack.Screen name="Notification" component={Notification}
          options={{headerTitleAlign:'center'}}
        />
        <Stack.Screen name="Filter" component={Filter}
          options={{headerTitleAlign:'center'}}
        />

    </Stack.Navigator>
  )
} 

export default HomeStack