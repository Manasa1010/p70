import * as React from "react";
import {View ,Text,TouchableOpacity, StyleSheet,Image,TextInput} from "react-native";
import {Header} from "react-native-elements";
export default class ReadStoryScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
            <Text>Read a Story</Text>

            </View>
        )
    }
}
var styles=StyleSheet.create({
    container:{
        width:150,
        height:50,
        borderWidth:2
    }
})