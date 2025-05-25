import React from "react";
import { View, ScrollView } from "react-native";
import { HomeView } from "./HomeView";
import { SearchScreen } from "./SearchScreen";
import { Ccategory } from "./Ccategory";

const Home = () => {
  return (
    <View style={{ backgroundColor: "light", flex: 1 }}>
      <ScrollView>
        <SearchScreen />
        <HomeView />
      </ScrollView>
    </View>
  );
};

export default Home;