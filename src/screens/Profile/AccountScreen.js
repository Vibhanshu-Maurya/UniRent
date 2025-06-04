import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../../styles/ProfileStyles';
import { useNavigation } from '@react-navigation/native';

const AccountScreen = () => {
  const navigation = useNavigation();

  const accountSettings = [
    { label: 'Edit Profile', icon: 'person-outline' },
    { label: 'Saved Credit / Debit & Gift Cards', icon: 'card-outline' },
    { label: 'Saved Addresses', icon: 'home-outline' },
    { label: 'Select Language', icon: 'globe-outline' },
    { label: 'Notification Settings', icon: 'notifications-outline' },
    { label: 'Privacy Center', icon: 'lock-closed-outline' },

  ];

  const myActivity = [
    { label: 'Reviews', icon: 'document-text-outline' },
    { label: 'Questions & Answers', icon: 'help-circle-outline' },
  ];

  const feedbackInfo = [
    { label: 'Terms, Policies and Licenses', icon: 'document-outline' },
    { label: 'Browse FAQs', icon: 'information-circle-outline' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require('../../../assets/SystemImages/vm.jpg')}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Vibhanshu Maurya</Text>
        <Text style={styles.profileEmail}>ashumzp63@gmail.com</Text>
      </View>

      <Text style={styles.sectionTitle}>Account Settings</Text>
      {
        accountSettings.map((item, index) => (
          <MenuItem key={index} label={item.label} icon={item.icon} />
        ))
      }

      <Text style={styles.sectionTitle}>My Activity</Text>
      {
        myActivity.map((item, index) => (
          <MenuItem key={index} label={item.label} icon={item.icon} />
        ))
      }

      <Text style={styles.sectionTitle}>Feedback & Information</Text>
      {
        feedbackInfo.map((item, index) => (
          <MenuItem key={index} label={item.label} icon={item.icon} />
        ))
      }

      <TouchableOpacity style={styles.logout}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.logoutText}>Log Out</Text>

      </TouchableOpacity>

      {/* {
        (
          <View style={styles.overlay}>
            <ActivityIndicator size="large" color="#fff" />
          </View>
        )} */} 
    </ScrollView>
  );
};

const MenuItem = ({ label, icon }) => (
  <TouchableOpacity style={styles.menuItem}>
    <View style={styles.menuItemLeft}>
      <Icon name={icon} size={20} color="#555" style={styles.icon} />
      <Text style={styles.menuLabel}>{label}</Text>
    </View>
    <Icon name="chevron-forward" size={20} color="#ccc" />
  </TouchableOpacity>
);

// Styles


export default AccountScreen;