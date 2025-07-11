import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { Styles } from '../../styles/SignInStyles';
import { useNavigation } from '@react-navigation/native';
import { ProfileContext } from '../../screens/Profile/ProfileContext';
import { BACKEND_URL } from '../../components/constants/Config';

const SignInScreen = () => {
  const navigation = useNavigation();
  const { updateProfile } = useContext(ProfileContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    if (!email || !password) {
      Alert.alert('Missing Fields', 'Please enter both email and password');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${BACKEND_URL}/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      setLoading(false);

      if (data.success) {
        updateProfile({
          id: data.user.id,
          name: data.user.name,
          email: data.user.email,
          image: data.user.image || null,
        });

        navigation.replace('MainScreen');
      } else {
        Alert.alert('Sign In Failed', data.message || 'Invalid credentials');
      }
    } catch (err) {
      setLoading(false);
      Alert.alert('Network Error', 'Please try again later');
    }
  };

  return (
    <View>
      <View style={Styles.firstContainer}>
        <Text style={Styles.signIn}>Sign In</Text>
      </View>

      <Text style={Styles.textDocument}>Email</Text>
      <TextInput
        style={Styles.textInput}
        placeholder="Enter your email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <Text style={Styles.textDocument}>Password</Text>
      <TextInput
        style={Styles.textInput}
        placeholder="Enter your password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />

      <TouchableOpacity onPress={() => navigation.navigate('ForgetPasswordScreen')}>
        <Text style={{
          marginRight: 25,
          marginTop: 5,
          fontSize: 15,
          textAlign: 'right',
          color: 'green',
          fontWeight: 'bold',
          textDecorationLine: 'underline',
        }}>
          Forgot Password?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={Styles.signInButton}
        onPress={handleSignIn}
        disabled={loading}
      >
        <Text style={Styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      {loading && (
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <ActivityIndicator size="large" color="green" />
        </View>
      )}

      <Text style={Styles.lastFirstText}>
        Don't have an account?{' '}
        <Text
          style={Styles.lastSecondText}
          onPress={() => navigation.navigate('SignUpScreen')}
        >
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

export default SignInScreen;
