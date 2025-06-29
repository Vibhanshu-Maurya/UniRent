import React from "react";
import { View, ScrollView } from "react-native";
import { HomeView } from "./RoomListView";
import { HomeNavBar } from "./HomeNavBar";
// import { Ccategory } from "../Categories/CategoryScreen";

const Home = () => {
  return (
    <View style={{ backgroundColor: "light", flex: 1 }}>
      <ScrollView>
        <HomeNavBar/>
        <HomeView/>
      </ScrollView>
    </View>
  );
};
 
export default Home;