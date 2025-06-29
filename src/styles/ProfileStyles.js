import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'green', // Change color as needed
    backgroundColor: '#fff', // Optional for contrast
    overflow: 'hidden',
  },
  profileName: {
    marginTop: 12,
    fontSize: 20,
    fontWeight: 'bold',
    width:'100%',
    textAlign:'center',
    // backgroundColor:'lightblue',
  },
  profileEmail: {
    color: '#777',
    marginTop: 4,
  },
  sectionTitle: {
    marginTop: 24,
    marginBottom: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor:'green'
  },
  icon: {
    marginRight: 12,
  },
  menuLabel: {
    fontSize: 15,
    color: '#000',
  },
  logout: {
    marginTop: 30,
    alignItems: 'center',
    paddingVertical: 12,
  },
  logoutText: {
    // color: '#E91E63',
    color:'brown',
    // fontSize: 16,
    fontSize:20,
    fontWeight: 'bold',
    marginBottom:30,
    borderRadius:10,
    backgroundColor:'pink',
    padding:10,
    paddingLeft:20,
    paddingRight:20,
  },
});