import React, { useState } from "react";
import { styles } from "../../styles/HomeStyles";
import {
  FlatList,
  Image,
  Text,
  TextInput,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const data = [
  {
    id: "1",
    title: "Apartment",
    address: "Apartment, Prayarag",
    price: "₹9,500",
    rating: "4.5",
    person: 3,
    uri: "https://media.istockphoto.com/id/2021707621/photo/night-scene-modern-style-luxury-black-master-bedroom-with-city-view-3d-render.jpg?s=2048x2048&w=is&k=20&c=2bJeNTK8HPMLBsdBIHwuF6pz6K_LSioV91pupbq_ZqE=",
    screen: "SeaViewScreen", // Apartment room
  },
  {
    id: "2",
    title: "Villa",
    address: "Villa, Delhi",
    price: "₹8,700",
    rating: "4.7",
    person: 2,
    uri: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80",
    screen: "RoyalVillaScreen", // Villa room
  },
  {
    id: "3",
    title: "Villa",
    address: "Villa, Bangalore",
    price: "₹8,000",
    rating: "4.6",
    person: 2,
    uri: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80",
    screen: "UrbanNestScreen", // House room
  },
  {
    id: "4",
    title: "CityTown",
    address: "CityTown, Hyderabad",
    price: "₹7,800",
    rating: "4.4",
    person: 3,
    uri: "https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&w=400&q=80",
    screen: "CityTownScreen", // Townhouse room
  },
  {
    id: "5",
    title: "WorkSpace",
    address: "WorkSpace, Pune",
    price: "₹7,500",
    rating: "4.3",
    person: 2,
    uri: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    screen: "WorkSpaceScreen", // Office room
  },
  {
    id: "6",
    title: "Office",
    address: "Office, Chennai",
    price: "₹8,200",
    rating: "4.2",
    person: 2,
    uri: "https://t3.ftcdn.net/jpg/03/16/69/16/360_F_316691661_oSHK65TNnCY0uHLk6htlrQtEm5yOmBBQ.jpg",
    screen: "SkylineScreen", // Apartment room
  },
  {
    id: "7",
    title: "Villa",
    address: "GreenVilla, Kolkata",
    price: "₹7,900",
    rating: "4.1",
    person: 3,
    uri: "https://media.istockphoto.com/id/1815808691/photo/luxury-bedroom-suite-in-resort-high-rise-hotel-with-cushion.jpg?s=2048x2048&w=is&k=20&c=0KXj_sK4TVRpuv_YfxGW3_QIsx1jGW1AQX_fY-NjEq4=",
    screen: "GreenVillaScreen", // Villa room
  },
];

const users = [
  {
    id: "1",
    name: "Pratik Maurya",
    offers: 126,
    image: require("../../../assets/SystemImages/pmm.jpg"),
    rating: 5,
    screen: "AmitSharmaScreen", // Screen for Pratik Maurya
  },
  {
    id: "2",
    name: "Vibhanshu Maurya",
    offers: 120,
    image: require("../../../assets/SystemImages/vmm.jpg"),
    rating: 5,
    screen: "PriyaSinghScreen", // Screen for Vibhanshu Maurya
  },
  {
    id: "3",
    name: "Aditya Maurya",
    offers: 156,
    image: require("../../../assets/SystemImages/ad.jpg"),
    rating: 5,
    screen: "RahulVermaScreen", // Screen for Aditya Maurya
  },
  {
    id: "4",
    name: "Ravi Maurya",
    offers: 156,
    image: require("../../../assets/SystemImages/ravi.jpg"),
    rating: 5,
    screen: "SnehaPatelScreen",
  },
  {
    id: "5",
    name: "Vikram Rao",
    offers: 156,
    image: require("../../../assets/SystemImages/vm.jpg"),
    rating: 5,
    screen: "VikramRaoScreen",
  },
];


const rooms = [
  {
    id: "1",
    image: {
      uri: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    }, // Replace with your image URLs
  },
  {
    id: "2",
    image: {
      uri: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd",
    },
  },
  // Add more room objects as needed
];

const houseList = [
  {
    id: "1",
    title: "Sundar Villa",
    price: "₹9,500/month",
    address: "Mumbai",
    rating: 3.9,
    image: {
      uri: "https://images.unsplash.com/photo-1460518451285-97b6aa326961",
    },
  },
  {
    id: "2",
    title: "Sunrise Residency",
    price: "₹10,000/month",
    address: "Hyderabad",
    rating: 4.5,
    image: {
      uri: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    },
  },
  {
    id: "3",
    title: "Urban Nest",
    price: "₹8,500/month",
    address: "Kolkata",
    rating: 4.2,
    image: {
      uri: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd",
    },
  },
  {
    id: "4",
    title: "Desi Cottage",
    price: "₹6,200/month",
    address: "Lucknow",
    rating: 4.0,
    image: {
      uri: "https://images.unsplash.com/photo-1523217582562-09d0def993a6",
    },
  },
  {
    id: "5",
    title: "Lakeview Haveli",
    price: "₹10,000/month",
    address: "Udaipur",
    rating: 4.8,
    image: {
      uri: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
    },
  },
  {
    id: "6",
    title: "Green Nest",
    price: "₹7,500/month",
    address: "Bhopal",
    rating: 4.3,
    image: { uri: "https://images.unsplash.com/photo-1542315192-1f61a179b3d9" },
  },
  {
    id: "7",
    title: "Cozy Loft",
    price: "₹5,800/month",
    address: "Pune",
    rating: 4.1,
    image: {
      uri: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
  },
  {
    id: "8",
    title: "Heritage Home",
    price: "₹9,000/month",
    address: "Jaipur",
    rating: 4.4,
    image: {
      uri: "https://images.unsplash.com/photo-1598928506312-7dc1d78b0a1f",
    },
  },
];

export const HomeView = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const roomTypeButton = [
    { label: "All", value: "All", path: "AllRoomType" },
    { label: "TownHouse", value: "TownHouse", path: "TownHouse" },
    { label: "Office", value: "Office", path: "Office" },
    { label: "House", value: "House", path: "House" },
    { label: "Villa", value: "Villa", path: "Villa" },
    { label: "Apartment", value: "Apartment", path: "Apartment" },
  ];

  return (
    <View style={styles.mainContainer}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 20, paddingTop: 10, height: 70 }}
      >
        {roomTypeButton.map((item, index) => (
          <MenuItem
            key={index}
            label={item.label}
            path={item.path}
            selectedButton={selectedButton}
            setSelectedButton={setSelectedButton}
            index={index}
          />
        ))}
      </ScrollView>

      <Text style={styles.textDiscover}>Discover</Text>
      <HomeViewCopy />
      <TopUsers />
      <HouseList />
    </View>
  );
};

const MenuItem = ({
  label,
  path,
  selectedButton,
  setSelectedButton,
  index,
}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    setSelectedButton(label);
    navigation.navigate(path);
  };

  return (
    <TouchableOpacity
      style={{
        backgroundColor: selectedButton === label ? "green" : "white",
        height: 40,
        width: 100,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "green",
        borderWidth: 1,
        borderRadius: 25,
        marginLeft: 10,
        // right:10,
        boxShadowColor: "green",
        elevation: 10,
      }}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <View>
        <Text
          style={{
            color: selectedButton === label ? "yellow" : "black",
            fontWeight: "600",
          }}
        >
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
        keyExtractor={(item) => item.id}
        style={styles.scrollImage}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.screen, { room: item })}
            activeOpacity={0.8}
          >
            <View
              style={{
                marginRight: 10,
                backgroundColor: "white",
                padding: 8,
                borderRadius: 25,
              }}
            >
              <Image source={{ uri: item.uri }} style={styles.mainImage} />
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <Text style={styles.address}>{item.address}</Text>
                <Text style={styles.price}>
                  {item.price}
                  <Text style={{ fontWeight: 400 }}>/month</Text>
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <Text style={styles.person}>{item.person}</Text>
                <Ionicons
                  name="person"
                  size={20}
                  color="brown"
                  style={{
                    opacity: 0.8,
                    marginLeft: 4,
                    textAlignVertical: "center",
                    opacity: 0.7,
                  }}
                />
                <Text style={styles.rating}>{item.rating}</Text>
                <Ionicons
                  name="star"
                  size={20}
                  color="orange"
                  style={{
                    opacity: 0.8,
                    marginLeft: 4,
                    textAlignVertical: "center",
                  }}
                />
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const TopUsers = () => {
  const navigation = useNavigation();
  return (
    <View style={{ margin: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 16 }}>
        Top Users
      </Text>
      <FlatList
        data={users}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.screen, { user: item })}
            activeOpacity={0.8}
          >
            <View style={styles.card}>
              <Image source={item.image} style={styles.avatar} />
              <View style={{ flexDirection: "row", marginTop: 8 }}>
                {[...Array(item.rating)].map((_, i) => (
                  <Ionicons key={i} name="star" size={16} color="#FFD700" />
                ))}
              </View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.offers}>{item.offers} offers</Text>
              {/* <TouchableOpacity style={styles.arrowBtn}>
                <Ionicons name="arrow-forward" size={18} color="#fff" />
              </TouchableOpacity> */}
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
    <TouchableOpacity
      onPress={() => navigation.navigate("House", { room: house })}
      activeOpacity={0.8}
    >
      <View style={styles.houseCardContainer}>
        <Image source={house.image} style={styles.houseCardImage} />
        <View style={styles.houseCardContent}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={styles.houseCardTitle}>{house.title}</Text>
            <Text style={styles.houseCardPrice}>
              {house.price}
              <Text style={styles.houseCardMonth}>/month</Text>
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", alignItems: "center", marginTop: 4 }}
          >
            <Ionicons
              name="location-outline"
              size={16}
              color="#888"
              style={{ marginRight: 4 }}
            />
            <Text style={styles.houseCardAddress}>{house.address}</Text>
            <View style={{marginLeft:130,flexDirection:'row'}}>
              <Ionicons
                name="star"
                size={16}
                color="#3A47BD"
                style={{ marginLeft: 12, marginRight: 2 }}
              />
              <Text style={styles.houseCardRating}>{house.rating}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const HouseList = () => (
  <View style={{ marginHorizontal: 16, marginTop: 8 }}>
    {houseList.map((house) => (
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
