import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, RefreshControl } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const initialNotifications = [
  {
    id: '1',
    icon: 'pricetag',
    color: '#4285F4',
    title: 'There are good deals',
    desc: 'Lots of great deals around new york that you should check out',
    unread: true,
  },
  {
    id: '2',
    icon: 'home',
    color: '#4285F4',
    title: 'Immediately check your dream house',
    desc: 'There are some progress information for the house that you have contacted.',
    unread: false,
  },
  {
    id: '3',
    icon: 'pricetags',
    color: '#34A853',
    title: 'The house is being discounted',
    desc: 'There are several houses currently on sale that you can check.',
    unread: false,
  },
  {
    id: '4',
    icon: 'star',
    color: '#FBBC05',
    title: 'The house with the best rating',
    desc: 'There are several houses that have the best quality and rating.',
    unread: false,
  },
];

const NotificationScreen = () => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [refreshing, setRefreshing] = useState(false);

  const handleClearAll = () => {
    setNotifications([]);
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setNotifications(initialNotifications); // Simulate fetching new data
      setRefreshing(false);
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      {/* Recent Notification Row */}
      <View style={styles.row}>
        <Text style={styles.recent}>Recent Notification</Text>
        <View style={styles.dot} />
        <TouchableOpacity onPress={handleClearAll}>
          <Text style={styles.clearAll}>Clear All</Text>
        </TouchableOpacity>
      </View>
      {/* Notification List */}
      <FlatList
        data={notifications}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {/* faded bg */}
            <View style={[styles.iconCircle, { backgroundColor: item.color + '22' }]}> 
              <Ionicons name={item.icon} size={22} color={item.color} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[styles.title, item.unread && { fontWeight: 'bold', color: '#222' }]}>{item.title}</Text>
              <Text style={styles.desc}>{item.desc}</Text>
            </View>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 24 }}
        ListEmptyComponent={<Text style={{textAlign:'center', color:'#888', marginTop:40}}>No notifications</Text>}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FB',
    paddingTop: 32,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    marginBottom: 10,
  },
  recent: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#F44336',
    marginHorizontal: 8,
    marginRight:120
  },
  clearAll: {
    color: '#4285F4',
    fontWeight: 'bold',
    fontSize: 14,
    // marginRight: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    marginHorizontal: 18,
    marginBottom: 14,
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  iconCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  title: {
    fontSize: 15,
    color: '#222',
    marginBottom: 2,
  },
  desc: {
    color: '#888',
    fontSize: 13,
  },
});

export default NotificationScreen;