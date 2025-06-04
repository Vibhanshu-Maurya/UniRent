import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './HomeScreen';
import Filter from '../Search/FilterOptions';
import Villa from '../Categories/Villas';
import Apartment from '../Categories/Apartments';
import AllRoomType from '../Categories/AllRoomTypes';
import TownHouse from '../Categories/Townhouses';
import Office from '../Categories/Offices';
import Cottage from '../Categories/Cottages';
import House from '../Categories/Houses';
import NotificationScreen from '../Notifications/NotificationScreen';
import SearchScreen from '../Search/SearchScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeMain" component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Notification" component={NotificationScreen}
        options={{ headerTitleAlign: 'center' }}
      />
      <Stack.Screen name="Filter" component={Filter}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="SearchScreen" component={SearchScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen name="Villa" component={Villa}
        options={{ headerShown: true, headerTitleAlign: 'center', title: 'Villa Details' }}
      />
      <Stack.Screen name="Apartment" component={Apartment}
        options={{ headerShown: true, headerTitleAlign: 'center' }}
      />
      <Stack.Screen name="TownHouse" component={TownHouse}
        options={{ headerShown: true, headerTitleAlign: 'center' }}
      />
      <Stack.Screen name="Office" component={Office}
        options={{ headerShown: true, headerTitleAlign: 'center' }}
      />
      <Stack.Screen name="Cottage" component={Cottage}
        options={{ headerShown: true, headerTitleAlign: 'center' }}
      />
      <Stack.Screen name="AllRoomType" component={AllRoomType}
        options={{ headerShown: true, headerTitleAlign: 'center' }}
      />
      <Stack.Screen name="House" component={House}
        options={{ headerShown: true, headerTitleAlign: 'center' }}
      />
    </Stack.Navigator>
  )
}

export default HomeStack