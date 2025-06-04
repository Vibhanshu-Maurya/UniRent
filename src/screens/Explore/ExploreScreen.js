import React, {useState} from 'react';
import {Text,View,Button,StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const TopTab = createMaterialTopTabNavigator();
const ButtonTab = createBottomTabNavigator();

const Explore = () => {
    return(
        <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style = {{fontSize:30}}>Chat Screen</Text>
        </View>
    )
}



export default Explore;