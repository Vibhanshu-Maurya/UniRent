import React from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import 'react-native-gesture-handler';
import Ionicons from "react-native-vector-icons/Ionicons";
import { styles } from "../HomeStyles";
import { useNavigation } from '@react-navigation/native';

// const TopTab = createMaterialTopTabNavigator();
// const ButtonTab = createBottomTabNavigator();

export const SearchScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.notificaitonTop}>
        <Text style={styles.appName}>UniRent</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Notification')}
          style={styles.notificationIcon}
        >
          <Ionicons
            name="notifications-outline"
            size={24}
            color="black"
            style={{ opacity: 1 }}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.searchOutline}>
        <TextInput style={styles.searchBar} placeholder="Search" />
        <TouchableOpacity
          onPress={() => console.log('search')}
          style={styles.searchStyle}
        >
          <Ionicons name="search-outline" size={25} color="" />
        </TouchableOpacity>
        <View style={{ flexDirection: "row", marginLeft: 25 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Filter')}
            style={styles.filterStyle}
          >
            <Ionicons name="filter-outline" size={26} color="" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};