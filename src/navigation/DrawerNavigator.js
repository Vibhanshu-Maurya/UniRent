import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainScreen from '../screens/Home/HomeScreen'; // Corrected path
import Profile from '../screens/Profile/ProfileScreen';
import Settings from '../screens/Profile/SettingsScreen';
import Help from '../screens/Help/HelpScreen';
import CustomDrawer from './CustomDrawer'; // custom drawer layout

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => (
  <Drawer.Navigator
    drawerContent={(props) => <CustomDrawer {...props} />}
    screenOptions={{ headerShown: false }}
  >
    <Drawer.Screen name="Home" component={MainScreen} />
    <Drawer.Screen name="Profile" component={Profile} />
    <Drawer.Screen name="Settings" component={Settings} />
    <Drawer.Screen name="Help" component={Help} />
  </Drawer.Navigator>
);

export default DrawerNavigation;