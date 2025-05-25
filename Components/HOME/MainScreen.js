import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeStack from "../../Components/HOME/HomeStack";
import Explore from "../Explore";
import Booking from "../../Components/Booking";
import Account from "../Account";

// const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const MainScreen = () => {
    return (
        <BottomTab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === "Home") {
                        iconName = focused ? "home" : "home-outline";
                    } else if (route.name === "Location") {
                        iconName = focused ? "location" : "location-outline";

                    } else if (route.name === "Booking") {
                        iconName = focused ? "calendar" : "calendar-outline";
                    } else if (route.name === "Account") {
                        iconName = focused ? "person" : "person-outline";
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: "blue",
                tabBarInactiveTintColor: "gray",
            })}
        >
            <BottomTab.Screen name="Home" component={HomeStack}
                options={{
                    headerShown: false
                }}
            />
            <BottomTab.Screen name="Location" component={Explore} />
            <BottomTab.Screen name="Booking" component={Booking} />
            <BottomTab.Screen name="Account" component={Account} />
        </BottomTab.Navigator>
    );
};

export default MainScreen;