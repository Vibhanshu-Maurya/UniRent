import React, { useState } from "react";
import { styles } from "../../styles/HomeStyles";
import { FlatList, Image, Text, TextInput, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const data = [
  {
    id: "1", address: 'Varanasi', price: '$1200', rating: '3', person: 3, uri: "https://plus.unsplash.com/premium_photo-1661877303180-19a028c21048?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
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

const users = [
  {
    id: '1', 
    name: 'Alex Methew',
    offers: 126,
    image: require('../../../assets/SystemImages/vm.jpg'), // Replace with your local image or use a URI
    rating: 5,
  },
  {
    id: '2',
    name: 'Jonny roland',
    offers: 120,
    image: require('../../../assets/SystemImages/vm.jpg'),
    rating: 5,
  },
  {
    id: '3',
    name: 'Mickey',
    offers: 156,
    image: require('../../../assets/SystemImages/vm.jpg'),
    rating: 5,
  },
  {
    id: '4',
    name: 'Mickey',
    offers: 156,
    image: require('../../../assets/SystemImages/vm.jpg'),
    rating: 5,
  },
  {
    id: '5',
    name: 'Mickey',
    offers: 156,
    image: require('../../../assets/SystemImages/vm.jpg'),
    rating: 5,
  },
];

const rooms = [
  {
    id: '1',
    image: { uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb' }, // Replace with your image URLs
  },
  {
    id: '2',
    image: { uri: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd' },
  },
  // Add more room objects as needed
];

const houseList = [
  {id: '1', title: 'Elelend House', price: '$1,450', address: '124 St Hive, USA', rating: 3.9, image: { uri: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961' }},
  {id: '2', title: 'Sunset Villa', price: '$2,100', address: '789 Palm Ave, LA', rating: 4.5, image: { uri: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae' }},
  {id: '3', title: 'Modern Loft', price: '$1,800', address: '456 Urban Rd, NY', rating: 4.2, image: { uri: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd' }},
  {id: '4', title: 'Country Cottage', price: '$1,200', address: '321 Maple St, TX', rating: 4.0, image: { uri: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6' }},
  {id: '5', title: 'Lakeview Home', price: '$2,500', address: '654 Lake Dr, MI', rating: 4.8, image: { uri: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca' }},
  // Add more houses as needed
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
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 20, paddingTop: 10, height: 70 }}>
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
      <HomeViewCopy/>
      <TopUsers />
      <HouseList />

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
  const navigation = useNavigation();
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
          <TouchableOpacity
            onPress={() => navigation.navigate('Villa', { room: item })}
            activeOpacity={0.8}
          >
            <View style={{ marginRight: 10, backgroundColor: 'white', padding: 8, borderRadius:25 }}>
              <Image
                source={{ uri: item.uri }}
                style={styles.mainImage}
              />
              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <Text style={styles.address}>{item.address}</Text>
                <Text style={styles.price}>{item.price}
                  <Text style={{fontWeight:400}}>/month</Text>
                </Text>
              </View>
              <View style={{ flexDirection: 'row', marginTop: 10, }}>
                <Text style={styles.person}>{item.person}</Text>
                <Ionicons name="person" size={20} color="brown" style={{opacity:0.8,   marginLeft: 4, textAlignVertical: 'center',opacity:0.7 }} />
                <Text style={styles.rating}>{item.rating}</Text>
                <Ionicons name="star" size={20} color="orange" style={{opacity:0.8, marginLeft: 4, textAlignVertical: 'center', }} />
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const TopUsers = () => {
  const navigation = useNavigation();
  return (
    <View style={{ margin: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 16 }}>Top Users</Text>
      <FlatList
        data={users}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ProfileScreen', { user: item })}
            activeOpacity={0.8}
          >
            <View style={styles.card}>
              <Image source={item.image} style={styles.avatar} />
              <View style={{ flexDirection: 'row', marginTop: 8 }}>
                {[...Array(item.rating)].map((_, i) => (
                  <Ionicons key={i} name="star" size={16} color="#FFD700" />
                ))}
              </View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.offers}>{item.offers} offers</Text>
              <TouchableOpacity style={styles.arrowBtn}>
                <Ionicons name="arrow-forward" size={18} color="#fff" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const HouseCard = ({ house }) => {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={{fontSize:22}}>Something New</Text>
    </View>,
    <TouchableOpacity onPress={() => navigation.navigate('Villa', { room: house })} activeOpacity={0.8}>
      <View style={styles.houseCardContainer}>
        <Image source={house.image} style={styles.houseCardImage} />
        <View style={styles.houseCardContent}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={styles.houseCardTitle}>{house.title}</Text>
            <Text style={styles.houseCardPrice}>{house.price}<Text style={styles.houseCardMonth}>/month</Text></Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
            <Ionicons name="location-outline" size={16} color="#888" style={{ marginRight: 4 }} />
            <Text style={styles.houseCardAddress}>{house.address}</Text>
            <Ionicons name="star" size={16} color="#3A47BD" style={{ marginLeft: 12, marginRight: 2 }} />
            <Text style={styles.houseCardRating}>{house.rating}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const HouseList = () => (
  <View style={{ marginHorizontal: 16, marginTop: 8 }}>
    {houseList.map(house => (
      <HouseCard key={house.id} house={house} />
    ))}
  </View>
);