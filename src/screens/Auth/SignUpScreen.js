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
        onPress={() => {
          if (agree) {
            setEmail('');
            setPassword('');
            setName('');
            setConfirmPassword('');
            setAgree(false);
          }
        }}
        disabled={!agree}
      >
        <Text style={Styles.buttonText}
          onPress={() => navigation.navigate('SignInScreen')}
        >Sign Up</Text>
      </TouchableOpacity>

      <Text style={Styles.lastFirstText}>
        Already have an account?{' '}
        <Text
          style={styles.registerText}
          onPress={() => navigation.navigate('SignInScreen')}
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