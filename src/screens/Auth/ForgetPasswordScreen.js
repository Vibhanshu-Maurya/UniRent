import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView, RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ForgetPasswordScreen = () => {
  const navigation = useNavigation();

  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [Current_Pass, setCurrent_Pass] = useState('');
  const [New_Pass, setNew_Pass] = useState('');
  const [Confirm_Pass, setConfirm_Pass] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  const handleReset = async () => {
    // Validate input fields
    if (!usernameOrEmail) {
      Alert.alert('Error', 'Please enter your username or email.');
      return;
    }
    if (!Current_Pass) {
      Alert.alert('Error', 'Please enter your Current Password.');
      return;
    }
    if (!New_Pass) {
      Alert.alert('Error', 'Please enter your new password.');
      return;
    }
    if (New_Pass !== Confirm_Pass) {
      Alert.alert('Error', 'New password and confirm password do not match.');
      return;
    }
    try {
      // Make a POST request to your backend to reset the password
      const res = await fetch('http://192.168.211.74:3000/forget-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: usernameOrEmail, currentPassword: Current_Pass, newPassword: New_Pass }),
      });
      const data = await res.json();
      if (data.success) {
        Alert.alert('Success', 'Your password has been reset!');
        navigation.goBack();
      } else {
        Alert.alert('Error', data.message || 'Password reset failed.');
      }
    } catch (e) {
      Alert.alert('Error', 'Network error.');
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setUsernameOrEmail('');
      setCurrent_Pass('');
      setNew_Pass('');
      setConfirm_Pass('');
      setRefreshing(false);
    }, 1000);
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.container}>
        <Text style={styles.title}>Forgot Password?</Text>
        <Text style={styles.subtitle}>Enter your username or registered email to reset your password</Text>
        <TextInput
          placeholder="Username or Email"
          value={usernameOrEmail}
          onChangeText={setUsernameOrEmail}
          autoCapitalize="none"
          style={styles.input}
        />
        <TextInput
          placeholder="Enter your Current Password"
          value={Current_Pass}
          onChangeText={setCurrent_Pass}
          secureTextEntry
          style={styles.input}
        />
        <TextInput
          placeholder="Create New Password"
          value={New_Pass}
          onChangeText={setNew_Pass}
          secureTextEntry
          style={styles.input}
        />
        <TextInput
          placeholder="Confirm Password"
          value={Confirm_Pass}
          onChangeText={setConfirm_Pass}
          secureTextEntry
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={handleReset}>
          <Text style={styles.buttonText}> Reset Password</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ForgetPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 25,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 25,
    textAlign: 'center',
  },
  input: {
    borderColor: 'white',
    margin: 10,
    marginLeft: 5,
    marginRight: 5,
    fontSize: 17,
    borderRadius: 10,
    backgroundColor: '#c8d5b9',
    height: 60,
    paddingLeft: 15,
    borderColor:'white',
  },
  button: {
    backgroundColor:'green',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
    marginTop:60,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  backText: {
    textAlign: 'center',
    color: 'green',
    fontSize: 15,
  },
});