import React, { useState } from "react";
import { styles } from "../../styles/HomeStyles";
import { FlatList } from "react-native-gesture-handler";
import { Image, Text, TextInput, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const data = [
  {
    id: "1", address: 'Varanasi', price: '$1200', rating: '5', person: 3, uri: "https://plus.unsplash.com/premium_photo-1661877303180-19a028c21048?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "2", address: 'Varanasi', price: '$1200', rating: '5', person: 3, uri: "https://media.istockphoto.com/id/1390233984/photo/modern-luxury-bedroom.jpg?s=612x612&w=0&k=20&c=po91poqYoQTbHUpO1LD1HcxCFZVpRG-loAMWZT7YRe4=",
  },
  {
    id: "3", address: 'Varanasi', price: '$1200', rating: '5', person: 3, uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCf6COSuYk3_0zWopUXSj6pMm4_lcOq7zhPQ&s",
  },
  {
    id: "4", address: 'Varanasi', price: '$1200', rating: '5', person: 3, uri: "https://media.designcafe.com/wp-content/uploads/2024/12/04110711/bed-back-wall-design-ideas.jpg",
  },
  {
    id: "5", address: 'Mumbai', price: '$1300', rating: '5', person: 3, uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3wggekZlxtA7FXpSfa-Smvzd1zSTYSVPgBQw7DQA178XNkCHra70uEx9es2EsYRHEM2w&usqp=CAU",
  },
  {
    id: "6", address: 'Simla', price: '$1100', rating: '5', person: 3, uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG3VWkLoM2ZvfqvWFWo--AOiAXKbbIQt6pcAFao70UWt1RqBa6eL80VKDu4lCLNoCiVJM&usqp=CAU",
  },
  {
    id: "7", address: 'Varanasi', price: '$1200', rating: '5', person: 3, uri: "https://images.pexels.com/photos/27349378/pexels-photo-27349378/free-photo-of-a-living-room-with-a-large-flat-screen-tv-and-ocean-view.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
];

export const HomeView = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const roomTypeButton = [
    { label: 'All', value: 'All', path: 'AllRoomType' },
    { label: 'TownHouse', value: 'TownHouse', path: 'TownHouse' },
    { label: 'Office', value: 'Office', path: 'Office' },
    { label: 'House', value: 'House', path: 'House' },
    { label: 'Villa', value: 'Villa', path: 'Villa' },
    { label: 'Apartment', value: 'Apartment', path: 'Apartment' },

  ];

  return (
    <View style={styles.mainContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 20, paddingTop: 10, height: 70}}>
        {
          roomTypeButton.map((item, index) => (
            <MenuItem
              key={index}
              label={item.label}
              path={item.path}
              selectedButton={selectedButton}
              setSelectedButton={setSelectedButton}
              index={index}
            />
          ))

        }
      </ScrollView>

      <Text style={styles.textDiscover}>Discover</Text>
      <HomeViewCopy />
      <HomeViewCopy />
      <HomeViewCopy />
      <HomeViewCopy />
      <HomeViewCopy />
      <HomeViewCopy />  
      <HomeViewCopy />
      <HomeViewCopy />
    </View>
  )
};

const MenuItem = ({ label, path, selectedButton, setSelectedButton, index }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    setSelectedButton(label);
    navigation.navigate(path);
  };

  return (
    <TouchableOpacity
      style={{
        backgroundColor: selectedButton === label ? 'green' : 'white',
        height: 40,
        width: 100,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'green',
        borderWidth: 1,
        borderRadius: 25,
        marginLeft: 10,
        // right:10,
        boxShadowColor: 'green',
        elevation: 10,
      }}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <View>
        <Text style={{
          color: selectedButton === label ? 'yellow' : 'black',
          fontWeight: '600'
        }}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const HomeViewCopy = () => {
  return (
    <View>
      <FlatList
        data={data}
        horizontal
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 10 }}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        style={styles.scrollImage}
        renderItem={({ item }) => (
          <View style={{ marginRight: 10, backgroundColor: 'white', padding: 10 }} >
            <Image
              source={{ uri: item.uri }}
              style={styles.mainImage}
            />
            <Text style={styles.address}>{item.address}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}