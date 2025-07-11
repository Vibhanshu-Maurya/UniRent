import React, { useState, useContext, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Modal,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { Styles } from '../../styles/SignUpStyles';
import { ProfileContext } from '../../screens/Profile/ProfileContext';

const BACKEND_URL = 'http://192.168.250.74:3000'; // Replace with your actual IP address

const SignUpScreen = () => {
  const navigation = useNavigation();
  const { updateProfile } = useContext(ProfileContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const isValidGmail = (email) =>
    /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);

  const handleSignUp = async () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert('Missing Fields', 'Please fill all the fields.');
      return;
    }

    if (!isValidGmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid Gmail address.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Password Mismatch', 'Passwords do not match.');
      return;
    }

    if (!agree) {
      Alert.alert('Agreement Required', 'You must agree to the terms.');
      return;
    }

    try {
      const res = await fetch(`${BACKEND_URL}/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (data.success) {
        updateProfile({
          name,
          email,
          image: null,
        });
        setModalVisible(true);
        setTimeout(() => {
          setModalVisible(false);
          navigation.navigate('SignInScreen');
        }, 2000);
      } else {
        Alert.alert('Signup Failed', data.message || 'Please try again');
      }
    } catch (err) {
      Alert.alert('Network Error', 'Could not connect to the server.');
    }
  };

  return (
    <View>
      <View style={Styles.firstContainer}>
        <Text style={Styles.signIn}>Sign Up</Text>
      </View>

      <Text style={Styles.textDocument}>Name</Text>
      <TextInput
        style={Styles.textInput}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        autoCapitalize="words"
      />

      <Text style={Styles.textDocument}>Email</Text>
      <TextInput
        style={Styles.textInput}
        placeholder="Enter your Gmail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={Styles.textDocument}>Password</Text>
      <TextInput
        style={Styles.textInput}
        placeholder="Enter password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Text style={Styles.textDocument}>Confirm Password</Text>
      <TextInput
        style={Styles.textInput}
        placeholder="Confirm password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <TouchableOpacity
        onPress={() => setAgree(!agree)}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 15,
          marginLeft: 22,
        }}
      >
        <View
          style={{
            width: 22,
            height: 22,
            borderWidth: 2,
            borderColor: 'green',
            borderRadius: 4,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 10,
            backgroundColor: agree ? 'green' : 'transparent',
          }}
        >
          {agree && <Ionicons name="checkmark" size={16} color="#fff" />}
        </View>
        <Text style={{ color: 'black' }}>
          I agree with the Terms and Conditions
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[Styles.signInButton, { backgroundColor: agree ? 'green' : '#ccc' }]}
        onPress={handleSignUp}
        disabled={!agree}
      >
        <Text style={Styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={Styles.lastFirstText}>
        Already have an account?{' '}
        <Text
          style={Styles.lastSecondText}
          onPress={() => navigation.navigate('SignInScreen')}
        >
          Sign In
        </Text>
      </Text>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              backgroundColor: '#fff',
              padding: 30,
              borderRadius: 10,
              alignItems: 'center',
              elevation: 5,
              width: '80%',
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
              Sign Up Completed!
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SignUpScreen;
