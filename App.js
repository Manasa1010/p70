import  React from 'react';
import {Stylesheet,Text,View,Image} from 'react-native'
import{createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import WriteStoryScreen from './screens.js/WriteStoryScreen'
import ReadStoryScreen from './screens.js/ReadStoryScreen'

export default class App extends React.Component {
    render(){
    
  }
  }

  var TabNavigator=createBottomTabNavigator({
      Write:{screen:WriteStoryScreen},
      Read:{screen:ReadStoryScreen}
  },
  {
      defaultNavigationOptions:({navigation})=>({
          tabBarIcon:({})=>{
              const routeName=navigation.state.routeName
             if(routeName==="Write" ){
                return(
                    <Image
                    style={{width:40,height:40}}
                    source={require("./assets/write.png")}
                    />
                )
             }else if(routeName==="Read"){
                 return(
                     <Image 
                     style={{width:40,height:40}}
                     source={require("./assets/read")}
                     />
                 )
             }
          }
      })
  })
  var AppContainer=createAppContainer(TabNavigator);