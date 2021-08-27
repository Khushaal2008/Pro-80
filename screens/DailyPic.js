import React, {Component} from 'react';
import { StyleSheet, Text, View,SafeAreaView,Platform,StatusBar,Image,ImageBackground,Alert,ActivityIndicator,TouchableOpacity,Linking } from 'react-native';
import axios from 'axios'

export default class DailyPic extends React.Component{

  constructor()
  {
    super()
    this.state={
      apod:{},
    }
  }

    componentDidMount() {
    this.getApod();
  }

  getApod = () =>{
    axios.get("https://api.nasa.gov/planetary/apod?api_key=TKezyxiIQgORVkaxyvRnVkBS0qfAsrgOZqbuDVt6")
    .then(response=>{
      this.setState({
        apod:response.data
        })
    })
    .catch(error=>{
      Alert.alert(error.message)
    })
  }

render(){
  if(Object.keys(this.state.apod).length == 0)
  {
    return(
    <View style={styles.indicatorText}>
    <ActivityIndicator style={styles.indicator}/>
    <Text>Loading</Text>
    </View>
    )
    
  }
  else{
return(
        <View style={styles.container}>
           <SafeAreaView style={styles.droidSafeArea}/>
           <ImageBackground style={styles.backgroundImage} source={require("../assets/space.gif")}>
           <View style={styles.title}>
              <Text style={styles.titleText}>Daily Picutes</Text>
            </View>


            <TouchableOpacity
            onPress={()=>Linking.openURL(this.state.apod.url).catch(error=>console.error("Couldn't load page",error))}
            >
            <View>
            <Image style={{
                    width: 70,
                    height: 70,
                    borderRadius: 10,
                    marginBottom:-50,
                    marginLeft:150,
                  }}
                  source={require("../assets/play-video.png")}/>
            </View> 

            <Text style={{color:"white",marginBottom:20,top:50,left:100}}>Click 👆👆to watch the video</Text>
            </TouchableOpacity>

            <View style={{ padding: 20 }}>
                <Text style={styles.title2}>{this.state.apod.title}</Text>
                <Text style={styles.explanationText}>
                  {this.state.apod.explanation}
                </Text>
              </View>
           
           </ImageBackground>
        </View>
          )
  }

  
 
        }
    }

const styles = StyleSheet.create({
  container: {
        flex: 3,
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

  title2:{
   fontSize:30,
        color:"lightgreen",
        fontWeight:"bold",
        marginTop:13
  },
  titleText:{
fontSize:40,
        color:"lightblue",
        fontWeight:"bold",
        marginTop:13
  },
  explanationText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'yellow',
    marginTop: 10,
    // margin: 10,
    // textAlign: 'center'
  },
  indicatorText:{
     flex: 1, justifyContent: 'center', alignItems: 'center' 
  },
  indicator:{
    color:"green"
  }
  })