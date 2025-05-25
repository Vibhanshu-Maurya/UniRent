import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export const Styles = StyleSheet.create({
  firstContainer: {
    marginTop: 120,
    marginBottom: 40,
  },
  signIn: {
    color: 'black',
    fontSize: 38,
    textAlign: 'center',
    marginBottom: 20,
    fontFamily:'Times New Romen',
    fontWeight:700
  },
  signInSecond: {
    color: 'black',
    fontSize: 17,
    textAlign: 'center',
  },
  textInput: {
    borderWidth: 2,
    borderColor: 'white',
    margin: 10,
    marginLeft: 21,
    marginRight: 20,
    fontSize: 17,
    borderRadius: 10,
    backgroundColor: '#c8d5b9',
    height: 60,
    paddingLeft: 15,
  },
  textDocument: {
    color: 'black',
    fontSize: 20,
    marginTop: 10,
    marginLeft: 20,
  },
  signInButton: {
    backgroundColor: 'green',
    opacity:0.9,
    padding: 8,
    margin: 30,
    marginTop:50,
    borderRadius: 30,
  },
  forgetPass: {
    marginLeft: 210,
    fontSize: 16,
    textDecorationLine: 'underline',
    textDecorationColor: 'green',
    color: 'green',
    fontWeight: '700',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontWeight:700,
    fontFamily:'Times New Romen'
  },
  orSignLine: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 15,
  },
  linkView: {
    width: 300,
    height: 80,
    margin: 40,
    marginLeft: 70,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  iconImage: {
    width: 50,
    height: 50,
    marginLeft: 20,
    borderRadius: 50,
    marginTop: 50,
  },
  lastFirstText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 40,
  },
  lastSecondText: {
    fontWeight:'700',
    fontFamily:'Times New Romen',
    color: 'green',
    textDecorationLine: 'underline',
    textDecorationColor: 'green',
    textAlign:'center'
  },
});