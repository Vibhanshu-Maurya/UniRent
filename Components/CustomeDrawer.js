import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: '#f0f0f0' }}>
        <View style={{ padding: 20, alignItems: 'center', borderBottomWidth: 1, borderColor: '#ccc' }}>
          <Image
            source={{ uri: 'https://via.placeholder.com/80' }}
            style={{ width: 80, height: 80, borderRadius: 40 }}
          />
          <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 18 }}>John Doe</Text>
          <Text style={{ color: 'gray' }}>johndoe@email.com</Text>
        </View>

        <View style={{ flex: 1, paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <View style={{ padding: 20, borderTopWidth: 1, borderColor: '#ccc' }}>
        <TouchableOpacity onPress={() => alert('Logout')}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="exit-outline" size={22} />
            <Text style={{ marginLeft: 10, fontSize: 16 }}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;