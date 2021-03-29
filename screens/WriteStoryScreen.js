import * as React from "react";
import {View ,Text,TouchableOpacity, StyleSheet,Image,TextInput} from "react-native";
import {Header} from "react-native-element";

export default class WriteStoryScreen extends React.Component{
    render(){
        return(
            <View>
<Header style={{width:100,height:40,flex:1}}>Write a Story</Header>
       <TextInput style={styles.inputBox} placeholder="Title of the Story "/>
       <TextInput style={styles.inputBox}placeholder="Author of the Story "/>
       <TextInput style={styles.inputBox} props={{multiline:true}} placeholder="Write Story "/>
       <TouchableOpacity style={styles.container}>
           <Text>Submit</Text>
       </TouchableOpacity>
       </View>
       )
    }
}
var styles=StyleSheet.create({
    inputBox:{
        width:150,
        height:50,
        borderWidth:2
    }, container:{
        width:150,
        height:50,
        borderWidth:2
    }
   
})