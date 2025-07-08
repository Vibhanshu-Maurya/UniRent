import React, { useState } from 'react';
import { FlatList, Text, View, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TopTab = createMaterialTopTabNavigator();

const Booking = () => (
  <View style={{ flex: 1, marginTop: 30 }}>
    <TopTab.Navigator>
      <TopTab.Screen name="Book" component={BookingTab} />
      <TopTab.Screen name="Chat" component={ChatHistory} />
      <TopTab.Screen name="Call History" component={CallHistory} />
    </TopTab.Navigator>
  </View>
);

const BookingTab = () => {

}

const ChatHistory = () => {
  
};

const CallHistory = () => {

}

export default Booking;