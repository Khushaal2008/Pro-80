import React, {Component} from 'react';
import { StyleSheet, Text, View,Platform,StatusBar,SafeAreaView,ImageBackground,Image,FlatList } from 'react-native';
import axios from 'axios'

export default class SpaceCrafts extends React.Component{

constructor()
{
  super();
  this.state={
    aircrafts:{},
  }
}

componentDidMount=()=>{
this.getData()
}

getData = ()=>{
axios.get("https://ll.thespacedevs.com/2.0.0/config/spacecraft/")
.then(response=>{
  this.setState({aircrafts:response.data.results})
})
.catch(error=>{
  console.log(error.message)
})
}

renderItem = ({item}) =>{
  return(
    <View style={{borderWidth:1,justifyContent:"center",alignItems:"center",marginBottom:10,elevation:10}}>
    <Image
    source={{uri:item.agency.image_url}}
    style={{width:"100%",height:200,marginTop:15,marginBottom:15,marginRight:10}}></Image>

    <Text style={{fontWeight:"bold",fontSize:20}}>{item.name}</Text>

    <Text style={{color:'#696969'}}>{item.agency.name}</Text>
    <Text>Description</Text>
    <Text style={{color:'#A9A9A9',marginLeft:10,marginRight:10}}>{item.name.description}</Text>
    </View>
  )
}

keyExtractor =(item, index)=> index.toString();
render(){
    return(
        <View style={styles.container}>
            <SafeAreaView style={styles.droidSafeArea}/>
            <View style={{flex:0.25}}>
            <Text style={{fontSize:20,fontWeight:"bold",color:"#eA5cFF"}}>Space Crafts</Text>
            </View>
            <View style={{flex:0.75}}>
            <FlatList
            keyExtractor={this.keyExtractor}
            data={this.state.aircrafts}
            renderItem={this.renderItem}
            />
            </View>
        </View>
          )
        }
   }
const styles = StyleSheet.create({
  container: {
        flex: 3,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"lightgreen",
    },

droidSafeArea:{
        marginTop : Platform.OS === "android" ? StatusBar.currentHeight:0
    }
  })