import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // import check icon
import { Styles } from '../../styles/SignUpStyles';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState(false);

  const handleSignUp = async () => {
    // Log when the Sign Up button is pressed
    console.log('SignUp button pressed');
    // Check if all fields are filled
    if (!name || !email || !password || !confirmPassword) {
      alert('Please fill all fields');
      return;
    }
    // Check if passwords match
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Check if user agreed to terms
    if (!agree) {
      alert('You must agree to the Terms and Conditions');
      return;
    }
    try {
      // Make a POST request to your backend /signup endpoint
      const res = await fetch('http://192.168.211.74:3000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
      // Log when the fetch completes
      console.log('Fetch completed');
      const data = await res.json();
      if (data.success) {
        // If sign up is successful, show alert and navigate to SignInScreen
        alert('Sign up successful! Please sign in.');
        navigation.navigate('SignInScreen');
      } else {
        // Show error message if sign up fails
        alert(data.error || 'Sign up failed');
      }
    } catch (e) {
      // Log and show network error if fetch fails
      console.log('Error:', e);
      alert('Network error');
    }
  };

  return (
    <View>
      <View style={Styles.firstContainer}>
        <Text style={Styles.signIn}>Sign Up</Text>
        <Text style={Styles.signInSecond}>
          Hi! Welcome to UniRent, Please Enter your details
        </Text>
      </View>

      <Text style={Styles.textDocument}>Name</Text>
      <TextInput
        style={Styles.textInput}
        placeholder="Enter your Name"
        onChangeText={(text) => setName(text)}
        value={name}
      />

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

      <Text style={Styles.textDocument}>Create Password</Text>
      <TextInput
        style={Styles.textInput}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />

      <Text style={Styles.textDocument}>Confirm Password</Text>
      <TextInput
        style={Styles.textInput}
        placeholder="Confirm Password"
        secureTextEntry={true}
        onChangeText={(text) => setConfirmPassword(text)}
        value={confirmPassword}
      />

      {/* Terms & Conditions Checkbox */}
      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={() => setAgree(!agree)}
      >
        <View style={[styles.checkbox, agree && styles.checkedCheckbox]}>
          {agree && <Ionicons name="checkmark" size={16} color="#fff" />}
        </View>
        <Text style={styles.checkboxText}>
          I agree with the Terms and Conditions
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          Styles.signInButton,
          { backgroundColor: agree ? 'green' : '#ccc' },
        ]}
        onPress={handleSignUp}
        disabled={!agree}
      >
        <Text style={Styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={Styles.lastFirstText}>
        Already have an account?{' '}
        <Text
          style={styles.registerText}
          // Remove onPress to disable going back to SignInScreen
        >Sign In</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: 'green',
    marginRight: 10,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedCheckbox: {
    backgroundColor: 'green',
    borderColor: '#007bff',
  },
  checkboxText: {
    fontSize: 14,
    color: '#333',
  },
  registerText: {
    color: 'green',
    textDecorationLine: 'underline',
    textDecorationColor: 'green',
    fontWeight: '700',
  },
});


export default SignUpScreen;