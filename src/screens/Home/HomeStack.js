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

// import { createStackNavigator } from '@react-navigation/stack';
import SeaViewScreen from '../../screens/RoomDetails/SeaViewScreen';
import RoyalVillaScreen from '../../screens/RoomDetails/RoyalVillaScreen';
import UrbanNestScreen from '../../screens/RoomDetails/UrbanNestScreen';
import CityTownScreen from '../../screens/RoomDetails/CityTownScreen';
import WorkSpaceScreen from '../../screens/RoomDetails/WorkSpaceScreen';
import SkylineScreen from '../../screens/RoomDetails/SkylineScreen';
import GreenVillaScreen from '../../screens/RoomDetails/GreenVillaScreen';

import { createStackNavigator } from '@react-navigation/stack';
import AmitSharmaScreen from '../../screens/UserDetails/AmitSharmaScreen';
import PriyaSinghScreen from '../../screens/UserDetails/PriyaSinghScreen';
import RahulVermaScreen from '../../screens/UserDetails/RahulVermaScreen';
import SnehaPatelScreen from '../../screens/UserDetails/SnehaPatelScreen';
import VikramRaoScreen from '../../screens/UserDetails/VikramRaoScreen';

//For Payment
import PaymentScreen from '../Payment/PaymentScreen';
import GpayQr from '../Payment/GpayQr';
import PaymentSuccessfulScreen from '../Payment/PaymentSuccessfulScreen';

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
        options={{ headerShown: true }}
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


      {/* Navigates from RoomListView.js FlatList (room cards) */}
      <Stack.Screen name="SeaViewScreen" component={SeaViewScreen} options={{ headerShown: false }} />
      <Stack.Screen name="RoyalVillaScreen" component={RoyalVillaScreen} options={{ headerShown: false }} />
      <Stack.Screen name="UrbanNestScreen" component={UrbanNestScreen} options={{ headerShown: false }} />
      <Stack.Screen name="CityTownScreen" component={CityTownScreen} options={{ headerShown: false }} />
      <Stack.Screen name="WorkSpaceScreen" component={WorkSpaceScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SkylineScreen" component={SkylineScreen} options={{ headerShown: false }} />
      <Stack.Screen name="GreenVillaScreen" component={GreenVillaScreen} options={{ headerShown: false }} />


      {/* Navigates from RoomListView.js TopUsers FlatList (user cards) */}
      <Stack.Screen name="AmitSharmaScreen" component={AmitSharmaScreen} options={{ title: 'Amit Sharma' }} />
      <Stack.Screen name="PriyaSinghScreen" component={PriyaSinghScreen} options={{ title: 'Priya Singh' }} />
      <Stack.Screen name="RahulVermaScreen" component={RahulVermaScreen} options={{ title: 'Rahul Verma' }} />
      <Stack.Screen name="SnehaPatelScreen" component={SnehaPatelScreen} options={{ title: 'Sneha Patel' }} />
      <Stack.Screen name="VikramRaoScreen" component={VikramRaoScreen} options={{ title: 'Vikram Rao' }} />
{/* 
      //Payment screen stack navigation */}
      <Stack.Screen name="PaymentScreen" component={PaymentScreen} options={{headerShown:true,title: 'Payment'}}/>
      <Stack.Screen name="GpayQr" component={GpayQr} options={{headerShown:true,title: 'Payment'}}/>
      <Stack.Screen name="PaymentSuccessfulScreen" component={PaymentSuccessfulScreen} options={{headerShown:true,title: 'Payment Successful'}}/>
      
    </Stack.Navigator>
  )
}

export default HomeStack