import React, { useState } from 'react';
import {Button,Image,Text,View,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Styles } from './StylesSignIn';
// import IMAGES from './IMAGES';


const Stack = createNativeStackNavigator();

const SignIn = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View> 
      <View style={Styles.firstContainer}>
        <Text style={Styles.signIn}>Sign In</Text>
        <Text style={Styles.signInSecond}>
          Hi! Welcome back, you've been missed
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

        <Text style={Styles.forgetPass}>Forget Password?</Text>

        <TouchableOpacity
          style={Styles.signInButton}
          onPress={() => { props.navigation.navigate("Home")}}
        >
          <Text style={Styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <Text style={Styles.orSignLine}>
          ------------- Or sign in with --------------
        </Text>

        {/* <View style={Styles.linkView}>
           <Image
            style={Styles.iconImage}
            source={{ uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngimg.com%2Fimage%2F19635&psig=AOvVaw2CynNkrn3Yu1AZt_Q5ZT8s&ust=1747'}}
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

        <View>
          <Text style ={Styles.lastFirstText}>Don't have an account?</Text>
          <TouchableOpacity>
            <Text style ={Styles.lastSecondText}>SignUp</Text>
          </TouchableOpacity>
        </View>
          
        
      </View>
    </View>
  );
};

export default SignIn;