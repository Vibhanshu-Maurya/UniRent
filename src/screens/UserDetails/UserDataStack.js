import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AmitSharmaScreen from '../../screens/UserDetails/AmitSharmaScreen';
import PriyaSinghScreen from '../../screens/UserDetails/PriyaSinghScreen';
import RahulVermaScreen from '../../screens/UserDetails/RahulVermaScreen';
import SnehaPatelScreen from '../../screens/UserDetails/SnehaPatelScreen';
import VikramRaoScreen from '../../screens/UserDetails/VikramRaoScreen';

const Stack = createStackNavigator();

const UserDataStack = () => (
  <Stack.Navigator initialRouteName="AmitSharmaScreen" screenOptions={{ headerShown: true }}>
    <Stack.Screen name="AmitSharmaScreen" component={AmitSharmaScreen} options={{ title: 'Amit Sharma' }} />
    <Stack.Screen name="PriyaSinghScreen" component={PriyaSinghScreen} options={{ title: 'Priya Singh' }} />
    <Stack.Screen name="RahulVermaScreen" component={RahulVermaScreen} options={{ title: 'Rahul Verma' }} />
    <Stack.Screen name="SnehaPatelScreen" component={SnehaPatelScreen} options={{ title: 'Sneha Patel' }} />
    <Stack.Screen name="VikramRaoScreen" component={VikramRaoScreen} options={{ title: 'Vikram Rao' }} />
  </Stack.Navigator>
);

export default UserDataStack;
