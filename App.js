import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Home from './screens/Home';
import Explore from './screens/Explore';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
const Stack=createStackNavigator();
const tab=createBottomTabNavigator();

export default function App() {
  return (
    <GestureHandlerRootView>
    <NavigationContainer >
      <tab.Navigator initialRouteName={Home}
      screenOptions={({route})=>({
        tabBarIcon:({focused,color,size})=>{
          let iconName;
          if(route.name==='Home'){
            iconName=focused?'home':'home-outline';
          }
          else if(route.name==='Explore'){
            iconName=focused?'compass':'compass-outline';
            }
            return <Ionicons name={iconName} size={size} color={color}/>;
            },
            tabBarActiveTintColor:'blue',
            tabBarInactiveTintColor:'gray',
            tabBarStyle:{
              backgroundColor:'#f0f0f0',
              borderTopWidth:0,
              elevation:0,
              shadowOpacity:0,
              }
              })}

      >
        <tab.Screen name="Home" component={Home} />
        <tab.Screen name="Explore" component={Explore} />
      </tab.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
