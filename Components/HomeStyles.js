import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  notificaitonTop: {
    flexDirection: 'row',
    marginLeft:8
    // backgroundColor:'orange'
  },
  notificationIcon: {
    marginTop: 50,
    marginLeft: 185,
  },
  appName: {
    fontSize: 25,
    fontWeight: 600,
    marginTop: 35,
    color:'brown',
    // textAlign: "center",
    marginLeft: 35
  },
  searchOutline: {
    borderWidth: 1,
    borderColor: "black",
    height: 45,
    width: 290,
    marginTop: 18,
    marginLeft: 25,
    flexDirection: 'row',
    borderRadius: 10
  },
  searchBar: {
    width: 242,
    fontSize: 16,
    borderColor: "black",
    // borderWidth:1,
    borderRadius: 10,
    paddingLeft: 18,
    backgroundColor: 'white',
    borderTopRightRadius:0,
    borderBottomRightRadius:0,
  },
  searchStyle: {
    marginTop: 8,
    marginLeft: 10
  },
  filterStyle: {
    marginTop: 8,
    // marginLeft:10
  },
  button:{
    backgroundColor:'black',
    width:100,
    height:40,
    marginLeft:10,
    borderRadius:10,
    borderWidth:2,
    borderColor:'white',
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonText:{
    color:'white',
    fontSize:18,
  },

  mainContainer: {
    // flex: 1,
    // backgroundColor: 'pink',
    // marginTop:10
    // padding: 10,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  textDiscover: {
    fontSize: 25,
    fontWeight: 700,
    fontFamily: 'Times New Romen',
    marginLeft: 15,
    marginTop: 15
  },
  scrollImage: {
    height: 280,
    width: 380,
    // backgroundColor:'green',
    // margin: 0,
  },
  mainImage: {
    height: 180,
    width: 250,
    borderWidth: 1,
    borderColor: 'brown',
    // marginLeft:8,
    borderRadius: 20,
    // borderTopLeftRadius:20,
    backgroundColor:'orange',
  },
  address: {
    width: 100,
    fontSize: 20,
    fontWeight:500,
    marginLeft: 10,

  },
  rating: {
    width: 15,
    fontSize: 20,
    marginLeft: 100,
    opacity:0.5,
  },
  price: {
    width: 100,
    fontSize: 20,
    marginLeft: 10,
    opacity:0.5,
  },
  person: {
    width: 15,
    fontSize: 20,
    marginLeft: 100,
    opacity:0.5,
  }
});