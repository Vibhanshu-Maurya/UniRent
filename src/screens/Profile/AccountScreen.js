import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../../styles/ProfileStyles';
import { useNavigation } from '@react-navigation/native';
import { ProfileContext } from './ProfileContext';

const AccountScreen = () => {
  const navigation = useNavigation();
  const { profile } = useContext(ProfileContext);
  const [modalVisible, setModalVisible] = useState(false);

  const accountSettings = [
    { label: 'Edit Profile', icon: 'person-outline', screen: 'EditProfileScreen' },
    { label: 'Change Password', icon: 'key-outline', screen: 'ChangePasswordScreen' },
    { label: 'Manage Phone/Email', icon: 'mail-outline', screen: 'ManagePhoneEmailScreen' },
    { label: 'Saved Credit / Debit & Gift Cards', icon: 'card-outline', screen: 'SavedCardsScreen' },
    { label: 'Saved Addresses', icon: 'home-outline', screen: 'SavedAddressesScreen' },
    { label: 'Account Verification', icon: 'shield-checkmark-outline', screen: 'AccountVerificationScreen' },
    { label: 'Switch Account Type', icon: 'swap-horizontal-outline', screen: 'SwitchAccountTypeScreen' },
    { label: 'Select Language', icon: 'globe-outline', screen: 'SelectLanguageScreen' },
    { label: 'Notification Settings', icon: 'notifications-outline', screen: 'NotificationSettingsScreen' },
    { label: 'Privacy Center', icon: 'lock-closed-outline', screen: 'PrivacyCenterScreen' },
    { label: 'Delete Account', icon: 'trash-outline', screen: 'DeleteAccountScreen' },
  ];

  const myActivity = [
    { label: 'My Bookings', icon: 'calendar-outline', screen: 'MyBookingsScreen' },
    { label: 'My Listings', icon: 'list-outline', screen: 'MyListingsScreen' },
    { label: 'Reviews', icon: 'document-text-outline', screen: 'ReviewsScreen' },
    { label: 'Questions & Answers', icon: 'help-circle-outline', screen: 'QuestionsAnswersScreen' },
    { label: 'Payment History', icon: 'cash-outline', screen: 'PaymentHistoryScreen' },
    { label: 'Saved Properties', icon: 'heart-outline', screen: 'SavedPropertiesScreen' },
    { label: 'Viewing Requests', icon: 'eye-outline', screen: 'ViewingRequestsScreen' },
    { label: 'Booking Requests', icon: 'clipboard-outline', screen: 'BookingRequestsScreen' },
  ];

  const feedbackInfo = [
    { label: 'Terms, Policies and Licenses', icon: 'document-outline', screen: 'TermsPoliciesScreen' },
    { label: 'Browse FAQs', icon: 'information-circle-outline', screen: 'BrowseFAQsScreen' },
    { label: 'Contact Support', icon: 'call-outline', screen: 'ContactSupportScreen' },
    { label: 'Report a Problem', icon: 'alert-circle-outline', screen: 'ReportProblemScreen' },
    { label: 'App Version', icon: 'apps-outline', screen: 'AppVersionScreen' },
  ];

  const otherSections = [ 
    { label: 'Invite Friends', icon: 'share-social-outline', screen: 'InviteFriendsScreen' },
    { label: 'App Theme', icon: 'color-palette-outline', screen: 'AppThemeScreen' },
    { label: 'About Us', icon: 'information-outline', screen: 'AboutUsScreen' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image source={profile.image} style={styles.profileImage} />
        </TouchableOpacity>

        <Modal
          visible={modalVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.8)', justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={{ position: 'absolute', top: 40, right: 20 }} onPress={() => setModalVisible(false)}>
              <Icon name="close" size={32} color="#fff" />
            </TouchableOpacity>
            <Image source={profile.image} style={{ width: 320, height: 400, borderRadius: 20, resizeMode: 'cover', backgroundColor: '#fff' }} />
          </View>
        </Modal>

        <Text style={styles.profileName}>{profile.name}</Text>
        <Text style={styles.profileEmail}>{profile.email}</Text>
      </View>

      <Text style={styles.sectionTitle}>Account Settings</Text>
      {accountSettings.map((item, index) => (
        <MenuItem key={index} label={item.label} icon={item.icon} screen={item.screen} />
      ))}

      <Text style={styles.sectionTitle}>My Activity</Text>
      {myActivity.map((item, index) => (
        <MenuItem key={index} label={item.label} icon={item.icon} screen={item.screen} />
      ))}

      <Text style={styles.sectionTitle}>Feedback & Information</Text>
      {feedbackInfo.map((item, index) => (
        <MenuItem key={index} label={item.label} icon={item.icon} screen={item.screen} />
      ))}

      <Text style={styles.sectionTitle}>Other</Text>
      {otherSections.map((item, index) => (
        <MenuItem key={index} label={item.label} icon={item.icon} screen={item.screen} />
      ))}

      <TouchableOpacity style={styles.logout} onPress={() => navigation.replace('SignInScreen')}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const MenuItem = ({ label, icon, screen }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.menuItem} onPress={() => screen && navigation.navigate(screen)}>
      <View style={styles.menuItemLeft}>
        <Icon name={icon} size={20} color="#555" style={styles.icon} />
        <Text style={styles.menuLabel}>{label}</Text>
      </View>
      <Icon name="chevron-forward" size={20} color="#ccc" />
    </TouchableOpacity>
  );
};

export default AccountScreen;
