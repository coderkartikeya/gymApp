import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import tw from 'twrnc';
import workoutSchedule from '../data/info';
import { useState } from 'react';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Flat from '../components/Flat';

export default function Home() { 

  

  return (
   
    <View style={tw`flex h-full`}>
      
      <Image source={require('../assets/gym.jpg')} style={tw`w-full h-60`}/>
      <Flat/>
      
      
      {/* <StatusBar style="auto" /> */}
    </View>
    
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
