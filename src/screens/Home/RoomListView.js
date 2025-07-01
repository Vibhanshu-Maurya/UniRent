import React, { useState } from "react";
import { styles } from "../../styles/HomeStyles";
import { FlatList, Image, Text, TextInput, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const data = [
  {
    id: "1", title: 'SeaView', address: 'Juhu Mumbai', price: '₹9,500', rating: '4.5', person: 3, uri: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80", // Apartment room
  },
  {
    id: "2", title: 'RoyalVilla', address: 'Vasant Delhi', price: '₹8,700', rating: '4.7', person: 2, uri: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80", // Villa room
  },
  {
    id: "3", title: 'UrbanNest', address: 'Indira Bangalore', price: '₹8,000', rating: '4.6', person: 2, uri: "https://images.unsplash.com/photo-1560448075-bb0bfcf7c6c8?auto=format&fit=crop&w=400&q=80", // House room
  },
  {
    id: "4", title: 'CityTown', address: 'Banjara Hyderabad', price: '₹7,800', rating: '4.4', person: 3, uri: "https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&w=400&q=80", // Townhouse room
  },
  {
    id: "5", title: 'WorkSpace', address: 'Koregaon Pune', price: '₹7,500', rating: '4.3', person: 2, uri: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80", // Office room
  },
  {
    id: "6", title: 'Skyline', address: 'T.Nagar Chennai', price: '₹8,200', rating: '4.2', person: 2, uri: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", // Apartment room
  },
  {
    id: "7", title: 'GreenVilla', address: 'SaltLake Kolkata', price: '₹7,900', rating: '4.1', person: 3, uri: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80", // Villa room
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
  {id: '6', title: 'Lakeview Home', price: '$2,500', address: '654 Lake Dr, MI', rating: 4.8, image: { uri: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca' }},
  {id: '7', title: 'Modern Loft', price: '$1,800', address: '456 Urban Rd, NY', rating: 4.2, image: { uri: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd' }},
  {id: '8', title: 'Elelend House', price: '$1,450', address: '124 St Hive, USA', rating: 3.9, image: { uri: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961' }},
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
            onPress={() => navigation.navigate('RoomDetails', { room: item })}
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
    <TouchableOpacity onPress={() => navigation.navigate('House', { room: house })} activeOpacity={0.8}>
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

// Add or update styles for RoomListView screen
// const localStyles = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//     backgroundColor: '#f2f8fc',
//     paddingTop: 10,
//   },
//   scrollImage: {
//     minHeight: 220,
//   },
//   mainImage: {
//     width: 180,
//     height: 120,
//     borderRadius: 18,
//     resizeMode: 'cover',
//   },
//   address: {
//     fontSize: 10,
//     color: '#222e3a',
//     fontWeight: 'bold',
//     marginRight: 10,
//   },
//   price: {
//     fontSize: 15,
//     color: '#4fd1f9',
//     fontWeight: 'bold',
//     marginLeft: 8,
//   },
//   person: {
//     fontSize: 14,
//     color: '#888',
//     marginRight: 4,
//   },
//   rating: {
//     fontSize: 14,
//     color: '#FFA500',
//     marginLeft: 8,
//     marginRight: 2,
//   },
//   textDiscover: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginLeft: 16,
//     marginTop: 16,
//     marginBottom: 8,
//     color: '#222e3a',
//   },
//   // ...other styles for TopUsers, HouseList, etc. can be added here as needed...
// });

// // Replace all 'styles.' with 'localStyles.' in this file for RoomListView-specific components
// // For example, in HomeView, HomeViewCopy, etc.