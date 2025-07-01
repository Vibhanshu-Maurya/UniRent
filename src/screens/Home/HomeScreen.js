import React, { useState } from "react";
import { View, ScrollView, RefreshControl } from "react-native";
import { HomeView } from "./RoomListView";
import { HomeNavBar } from "./HomeNavBar";
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      navigation.reset({
        index: 0,
        routes: [{ name: 'HomeMain' }],
      });
    }, 1000);
  };

  return (
    <View style={{ backgroundColor: "light", flex: 1 }}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <HomeNavBar/>
        <HomeView/>
      </ScrollView>
    </View>
  );
};
 
export default Home;