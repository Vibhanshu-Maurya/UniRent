import { View, Text } from 'react-native'
import React from 'react'
import { SearchScreen } from './HOME/SearchScreen';
import Notification from './HOME/Notification';

const NotificationNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={SearchScreen} />
            <Stack.Screen name="Detail" component={Notification} />
        </Stack.Navigator>
    )
}

export default NotificationNavigator