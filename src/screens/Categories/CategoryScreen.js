import React from "react";
import { TouchableOpacity, Link, Text, View, Pressable } from "react-native";
import 'react-native-gesture-handler';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { styles } from "../HomeStyles";
import House from "./CATEGORY/House";
import Loj from './CATEGORY/Loj'
import Apartment from './CATEGORY/Apartment'
import Office from './CATEGORY/Office'
import HouseView1 from "./CATEGORY/HouseView1";

const TopTab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

export const Ccategory = (props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="House"
                component={House}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="HouseView1"
                component={HouseView1}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}; 