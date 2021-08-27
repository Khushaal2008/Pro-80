import React, {Component} from 'react';
import { Text, View,StyleSheet,SafeAreaView,TouchableOpacity,Image,ImageBackground,Platform,StatusBar } from 'react-native';

export default class HomeScreen extends React.Component{
render(){
    return(
         <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground style={styles.backgroundImage}source={require("../assets/stars.gif")}>

                
            <View style={styles.title}>
              <Text style={styles.titleText}>Iss Tracker App</Text>
<Image style={styles.logo} source={require('../assets/main-icon.png')}/>
            </View>
                
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("SpaceCrafts")} style={styles.routeCard}>
                    <Text style={styles.routeText}>
                    
                        Space Crafts 
                    </Text>
                   
                      <Image
                      style={styles.iconImage}
                      source={require("../assets/space_crafts.png")}
                      />
                    
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.props.navigation.navigate("StarMap")} style={styles.routeCard}>
                    <Text style={styles.routeText}>Star Map</Text>
                  
                    <Image
                    style={styles.iconImage}
                    source={require("../assets/star_map.png")}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.props.navigation.navigate("DailyPic")} style={styles.routeCard}>
                    <Text style={styles.routeText}>Daily Pictures</Text>
                    <Image
                    style={styles.iconImage}
                    source={require("../assets/daily_pictures.png")}
                    />
                    
                </TouchableOpacity>
                </ImageBackground>

                <Text style={{color:"white"}}>Made By-Khushaal</Text>
            </View>
          )
        }


                                                     }

const styles = StyleSheet.create({
  container: {
        flex: 1,
        backgroundColor:"black"
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
    routeCard:{
        flex:.5,
        backgroundColor:"lightblue",
        borderRadius:30,
        marginTop:70,
        marginLeft:50,
        marginRight:50,
    },
    routeText:{
        fontWeight:'bold',
        fontSize:30,
        color:"black",
        marginTop:55,
        paddingLeft:30
    },
    iconImage: {
        position: "absolute",
        height: 100,
        width: 100,
        resizeMode: "contain",
        right: 20,
        top: -20
    },
    logo:{
      position: "absolute",
        height: 150,
        width: 150,
        resizeMode: "contain",
        right: 130,
        top: 50
    }

  })