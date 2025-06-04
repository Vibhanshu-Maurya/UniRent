import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  notificaitonTop: {
    flexDirection: 'row',
    marginLeft: 8
  },
  notificationIcon: {
    marginTop: 30,
    marginLeft: 170,
    padding: 9,
    borderRadius: 50,
    elevation: 10,
    backgroundColor: 'white',
  },
  appName: {
    fontSize: 25,
    fontWeight: 600,
    marginTop: 35,
    color: 'green',
    marginLeft: 35
  },
  searchOutline: {
    borderWidth: 1,
    borderColor: "black",
    height: 45,
    width: 290,
    marginTop: 18,
    marginLeft: 15,
    flexDirection: 'row',
    borderRadius: 10,
    boxShadowColor: 'black',
    elevation: 10,
  },
  searchBar: {
    width: 242,
    fontSize: 16,
    borderColor: "black",
    borderRadius: 10,
    paddingLeft: 18,
    backgroundColor: 'white',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,

  },
  searchStyle: {
    // marginTop: 8,
    // marginLeft: 10,
    width: 46,
    // backgroundColor:'gray',
    // borderTopRightRadius: 10,
    // borderBottomRightRadius: 10,
  },
  filterStyle: {
    marginLeft: 2,
    padding: 9,
    borderRadius: 50,
    backgroundColor: 'white',
    elevation: 10,
  },
  button: {
    backgroundColor: 'black',
    width: 100,
    height: 40,
    marginLeft: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  headerContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  
  textDiscover: {
    fontSize: 25,
    fontWeight: 700,
    fontFamily: 'Times New Romen',
    marginLeft: 15,
  },
  scrollImage: {
    height: 280,
    width: 380,
  },
  mainImage: {
    height: 180,
    width: 250,
    borderRadius: 20,
    borderColor: 'black',
  },
  address: {
    width: 100,
    fontSize: 20,
    fontWeight: 500,
    marginLeft: 10,
  },
  rating: {
    width: 15,
    fontSize: 20,
    marginLeft: 100,
    opacity: 0.5,
  },
  price: {
    width: 100,
    fontSize: 20,
    marginLeft: 10,
    opacity: 0.5,
  },
  person: {
    width: 15,
    fontSize: 20,
    marginLeft: 100,
    opacity: 0.5,
  }
});