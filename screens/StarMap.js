import React, {Component} from 'react';
import { StyleSheet, Text, View,Platform,StatusBar,SafeAreaView,ImageBackground,Image,TextInput } from 'react-native';
import {WebView} from 'react-native-webview'

export default class StarMap extends React.Component{

  constructor(){
    super()
    this.state={
      latitude:'',
      longitude:''
    }
  }

render(){
  const {longitude,latitude} = this.state;
  const path = `https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true`
    return(
        <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea}/>
        <ImageBackground style={styles.backgroundImage} source={require("../assets/stars.gif")}>
        <View style={styles.title}>
              <Text style={styles.titleText}>Star Map</Text>
            </View>

            <TextInput
            style={styles.inputBox}
            placeholder="Enter Longitude"
            placeholderTextColor="white"
            onChangeText={(text)=>{
              this.setState({
                longitude:text
              })
            }}
            />

            <TextInput
            style={styles.inputBox}
            placeholder="Enter Latitude"
            placeholderTextColor="white"
            onChangeText={(text)=>{
              this.setState({
                latitude:text
              })
            }}
            />

            <View style={styles.mapContainer}>
            <WebView
            style={styles.map}
          scalesPageToFit={true}
          source={{ uri: path }}
        />
            </View>

            
        </ImageBackground>
           
        </View>
          )
        }
                                                     }

const styles = StyleSheet.create({
  container: {
        flex: 1,
        backgroundColor:"lightgreen"
    },

droidSafeArea:{
        marginTop : Platform.OS === "android" ? StatusBar.currentHeight:0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
  title:{
    flex:.5,
        justifyContent: "center",
        alignItems: "center"
  },
  titleText:{
fontSize:40,
        color:"lightblue",
        fontWeight:"bold",
        marginTop:-50
  },
  inputBox:{
      width: 200,
      height: 40,
      borderWidth: 5,
      borderRightWidth: 0,
      fontSize: 20,
      backgroundColor:"red",
      borderRadius:10,
      textAlign:"center",
     marginTop: 10,
    marginRight: 20,
    marginLeft: 70,
    },
    mapContainer: {
        flex: 0.7
    },
    map: {
        width: "100%",
        height: "100%"
    },
  })