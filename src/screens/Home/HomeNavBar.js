import React from "react";
import { Text, TextInput, View, TouchableOpacity, TouchableHighlight } from "react-native";
import 'react-native-gesture-handler';
import Ionicons from "react-native-vector-icons/Ionicons";
import { styles } from "../../styles/HomeStyles";
import { useNavigation } from '@react-navigation/native';

// const TopTab = createMaterialTopTabNavigator();
// const ButtonTab = createBottomTabNavigator();

export const HomeNavBar = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = React.useState("");

  const handleSearch = () => {
    // Navigate to SearchScreen and pass the search text as a param
    navigation.navigate("SearchScreen", { query: searchText });
  };

  return (
    <View style={{marginTop:20}}>
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
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity
          onPress={handleSearch}
          style={styles.searchStyle}
        >
          <View style={{backgroundColor:'rgba(211, 211, 211, 1)',flex: 1, justifyContent: 'center', alignItems: 'center',borderTopRightRadius: 10, borderBottomRightRadius: 10}}> 
            <Ionicons name="search-outline" size={25} color="" />
          </View>
        </TouchableOpacity>
        <View style={{ marginLeft: 10 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Filter')}
            style={styles.filterStyle}
          >
            <Ionicons name="filter-outline" size={25} color="" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};