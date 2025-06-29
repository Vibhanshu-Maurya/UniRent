import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from './AccountScreen';
import EditProfileScreen from './EditProfileScreen';
import ChangePasswordScreen from './ChangePasswordScreen';
import ManagePhoneEmailScreen from './ManagePhoneEmailScreen';
import SavedCardsScreen from './SavedCardsScreen';
import SavedAddressesScreen from './SavedAddressesScreen';
import AccountVerificationScreen from './AccountVerificationScreen';
import SwitchAccountTypeScreen from './SwitchAccountTypeScreen';
import SelectLanguageScreen from './SelectLanguageScreen';
import NotificationSettingsScreen from './NotificationSettingsScreen';
import PrivacyCenterScreen from './PrivacyCenterScreen';
import DeleteAccountScreen from './DeleteAccountScreen';
// My Activity
import MyBookingsScreen from './MyBookingsScreen';
import MyListingsScreen from './MyListingsScreen';
import ReviewsScreen from './ReviewsScreen';
import QuestionsAnswersScreen from './QuestionsAnswersScreen';
import PaymentHistoryScreen from './PaymentHistoryScreen';
import SavedPropertiesScreen from './SavedPropertiesScreen';
import ViewingRequestsScreen from './ViewingRequestsScreen';
import BookingRequestsScreen from './BookingRequestsScreen';
// Feedback & Info
import TermsPoliciesScreen from './TermsPoliciesScreen';
import BrowseFAQsScreen from './BrowseFAQsScreen';
import ContactSupportScreen from './ContactSupportScreen';
import ReportProblemScreen from './ReportProblemScreen';
import AppVersionScreen from './AppVersionScreen';
// Other
import InviteFriendsScreen from './InviteFriendsScreen';
import AppThemeScreen from './AppThemeScreen';
import AboutUsScreen from './AboutUsScreen';

const Stack = createStackNavigator();

const AccountStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: true }}>
    <Stack.Screen name="AccountScreen" component={AccountScreen} options={{ title: 'Account',headerShown:false}} />
    <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
    <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} />
    <Stack.Screen name="ManagePhoneEmailScreen" component={ManagePhoneEmailScreen} />
    <Stack.Screen name="SavedCardsScreen" component={SavedCardsScreen} />
    <Stack.Screen name="SavedAddressesScreen" component={SavedAddressesScreen} />
    <Stack.Screen name="AccountVerificationScreen" component={AccountVerificationScreen} />
    <Stack.Screen name="SwitchAccountTypeScreen" component={SwitchAccountTypeScreen} />
    <Stack.Screen name="SelectLanguageScreen" component={SelectLanguageScreen} />
    <Stack.Screen name="NotificationSettingsScreen" component={NotificationSettingsScreen} />
    <Stack.Screen name="PrivacyCenterScreen" component={PrivacyCenterScreen} />
    <Stack.Screen name="DeleteAccountScreen" component={DeleteAccountScreen} />
    <Stack.Screen name="MyBookingsScreen" component={MyBookingsScreen} />
    <Stack.Screen name="MyListingsScreen" component={MyListingsScreen} />
    <Stack.Screen name="ReviewsScreen" component={ReviewsScreen} />
    <Stack.Screen name="QuestionsAnswersScreen" component={QuestionsAnswersScreen} />
    <Stack.Screen name="PaymentHistoryScreen" component={PaymentHistoryScreen} />
    <Stack.Screen name="SavedPropertiesScreen" component={SavedPropertiesScreen} />
    <Stack.Screen name="ViewingRequestsScreen" component={ViewingRequestsScreen} />
    <Stack.Screen name="BookingRequestsScreen" component={BookingRequestsScreen} />
    <Stack.Screen name="TermsPoliciesScreen" component={TermsPoliciesScreen} />
    <Stack.Screen name="BrowseFAQsScreen" component={BrowseFAQsScreen} />
    <Stack.Screen name="ContactSupportScreen" component={ContactSupportScreen} />
    <Stack.Screen name="ReportProblemScreen" component={ReportProblemScreen} />
    <Stack.Screen name="AppVersionScreen" component={AppVersionScreen} />
    <Stack.Screen name="InviteFriendsScreen" component={InviteFriendsScreen} />
    <Stack.Screen name="AppThemeScreen" component={AppThemeScreen} />
    <Stack.Screen name="AboutUsScreen" component={AboutUsScreen} />
  </Stack.Navigator>
);

export default AccountStack;
