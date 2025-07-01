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

  const handleSignIn = () => {
    // Add real authentication logic here
    if (email && password) {
      setLoading(true); // Start loading
      setTimeout(() => {
        setLoading(false);
        navigation.replace('MainScreen');
      }, 3000); // 3 seconds delay
    } else {
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
            {loading ? 'Signing In...' : 'Sign In'}
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

        {/* <View style={Styles.linkView}>
          <Image
            style={Styles.iconImage}
            source={require('./IMAGES/facebook.png')}
          />
          <Image
            style={Styles.iconImage}
            source={require('./IMAGES/git.png')}
          />
          <Image
            style={Styles.iconImage}
            source={require('./IMAGES/instagram.png')}
          />
        </View> */}

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