import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export const Styles = StyleSheet.create({
  // container:{
  //   flex: 1,
  //   backgroundColor: '#f0f4c3',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  firstContainer: {
    marginTop: 80,
    marginBottom: 25,
  },
  signIn: {
    color: 'black',
    fontSize: 35,
    textAlign: 'center',
    marginBottom: 20,
    fontFamily:'Times New Romen',
    fontWeight:700
  },
  signInSecond: {
    color: 'black',
    fontSize: 15,
    textAlign: 'center',
  },
  textInput: {
    borderWidth: 2,
    borderColor: 'white',
    margin: 10,
    marginLeft: 21,
    marginRight: 20,
    fontSize: 15,
    borderRadius: 10,
    backgroundColor: '#c8d5b9',
    height: 50,
    paddingLeft: 15,
  },
  textDocument: {
    color: 'black',
    fontSize: 18,
    marginTop: 10,
    marginLeft: 20,
  },
  signInButton: {
    backgroundColor: 'green',
    opacity:0.9,
    padding: 8,
    margin: 30,
    marginTop:30,
    borderRadius: 30,
  },
//   forgetPass: {
//     marginLeft: 210,
//     fontSize: 16,
//     textDecorationLine: 'underline',
//     textDecorationColor: 'green',
//     color: 'green',
//     fontWeight: '700',
//   },


  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontWeight:700,
    fontFamily:'Times New Romen'
  },
  orSignLine: {
    textAlign: 'center',
    fontSize: 15,
  },
//   linkView: {
//     width: 300,
//     height: 80,
//     margin: 40,
//     marginLeft: 70,
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 50,
//   },
  iconImage: {
    width: 50,
    height: 50,
    marginLeft: 20,
    borderRadius: 50,
    marginTop: 20,
  },
  lastFirstText: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '700',

  },
  lastSecondText: {
    color: 'green',
    textDecorationLine: 'underline',
    textDecorationColor: 'green',
  },
});