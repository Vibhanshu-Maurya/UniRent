import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  //HomeView styles
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
    width:46
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

  //HomeViewCopy styles
  scrollImage: {
    height: 300,
    width: 380,
  },
  mainImage: {
    height: 190,
    width: 300,
    borderRadius: 20,
    borderColor: 'black',
    borderBottomLeftRadius:30,
    borderBottomRightRadius: 30,
  },
  address: {
    width: 100,
    fontSize: 20,
    fontWeight: 500,
    marginLeft: 15,
    // marginTop: 6,
    // opacity: 0.7,
    textAlignVertical: 'center',
  },
  rating: {
    width: 15,
    fontSize: 20,
    marginLeft: 140,
    // opacity: 0.5,display: 'flex',
    // display: 
    // flexDirection: 'row',
    textAlignVertical: 'center',
  },
  price: {
    width: 100,
    fontSize: 15,
    fontWeight: 600,
    marginLeft: 80,
    // opacity: 0.5,
    // marginTop: 6,
    textAlignVertical: 'center',
  },
  person: {
    width: 15,
    fontSize: 20,
    marginLeft: 15,
    opacity: 0.5,
    textAlignVertical: 'center',
  },

  //Top Users
  card: {
    // backgroundColor: '#4B5AEF',
    backgroundColor:'green',
    borderRadius: 20,
    width: 150,
    marginRight: 16,
    alignItems: 'center',
    paddingVertical: 16,
    position: 'relative',
  },
  avatar: {
    width: 70,
    height: 50,
    borderRadius: 12,
    marginBottom: 4,
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 8,
  },
  offers: {
    color: '#fff',
    fontSize: 13,
    marginTop: 2,
    marginBottom: 8,
  },
  arrowBtn: {
    position: 'absolute',
    right: 12,
    bottom: 12,
    backgroundColor: '#3A47BD',
    borderRadius: 50 ,
    padding: 5,
    // marginBottom:10,
    
  },

  //HouseCard styles
  houseCardContainer: {
    backgroundColor: '#fff',
    borderRadius: 18,
    marginBottom: 18,
    padding: 12,
    flexDirection: 'column',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
  houseCardImage: {
    width: '100%',
    height: 120,
    borderRadius: 12,
    marginBottom: 10,
  },
  houseCardContent: {
    paddingHorizontal: 4,
  },
  houseCardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#222',
  },
  houseCardPrice: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#222',
  },
  houseCardMonth: {
    fontWeight: '400',
    fontSize: 13,
    color: '#888',
  },
  houseCardAddress: {
    color: '#888',
    fontSize: 13,
    marginRight: 8,
  },
  houseCardRating: {
    color: '#3A47BD',
    fontWeight: 'bold',
    fontSize: 13,
  },
});