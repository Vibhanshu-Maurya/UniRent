import React, { useState } from 'react';      
import {
  Image,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator, // Import ActivityIndicator
} from 'react-native';
import { Styles } from '../../styles/SignInStyles';
import { useNavigation } from '@react-navigation/native';
// import IMAGES from './IMAGES';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Add loading state
  const navigation = useNavigation();

  const handleSignIn = async () => {
    // Log when the Sign In button is pressed
    console.log('SignIn button pressed');
    // Check if both email and password fields are filled
    if (email && password) {
      setLoading(true); // Show loading spinner
      try {
        // Make a POST request to your backend /signin endpoint
        const res = await fetch('http://192.168.211.74:3000/signin', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });
        // Log when the fetch completes
        console.log('Fetch completed');
        const data = await res.json();
        setLoading(false); // Hide loading spinner
        if (data.success) {
          // If sign in is successful, navigate to MainScreen
          navigation.replace('MainScreen');
        } else {
          // Show error message if sign in fails
          alert(data.message || 'Sign in failed');
        }
      } catch (e) {
        setLoading(false);
        // Show network error if fetch fails
        alert('Network error');
      }
    } else {
      // Show alert if fields are empty
      alert('Please fill in both fields');
    }
  };
  
  return (
    <View>
      <View style={Styles.firstContainer}>
        <Text style={Styles.signIn}>Sign In</Text>
        <Text style={Styles.signInSecond}>
          Hii Welcome , you've been missed
        </Text>
      </View>

      <View>
        <Text style={Styles.textDocument}>Email</Text>
        <TextInput
          style={Styles.textInput}
          placeholder="Enter your email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          keyboardType="email-address" // Only show email keyboard
          autoCapitalize="none" // Prevent auto-capitalization
          autoCorrect={false} // Prevent autocorrect
        />

        <Text style={Styles.textDocument}>Password</Text>
        <TextInput
          style={Styles.textInput}
          placeholder="Enter your password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />

        <Text style={Styles.forgetPass} onPress={()=> navigation.navigate('ForgetPasswordScreen')}>Forget Password?</Text>

        <TouchableOpacity
          style={Styles.signInButton}
          onPress={handleSignIn}
          disabled={loading} // Disable button while loading
        >
          <Text style={Styles.buttonText}>
            Sign In
          </Text>
        </TouchableOpacity>
        {/* Show loading indicator if loading */}
        {loading && (
          <View style={{ alignItems: 'center', marginTop: 10 }}>
            <ActivityIndicator size="large" color="#007AFF" />
          </View>
        )}

        <Text style={Styles.orSignLine}>
          {/* ------------- Or sign in with -------------- */}
        </Text>

        <Text style={Styles.lastFirstText}>
          Don't have an account?{' '}
          <Text style={Styles.lastSecondText}
          onPress={() => navigation.navigate('SignUpScreen')}>Sign Up</Text>
        </Text>
      </View>
    </View>
  );
};

export default SignInScreen;