import { View, Text,FlatList,Image } from 'react-native'
import React from 'react'
import { useState } from 'react';
import workoutSchedule from '../data/info';
import tw from 'twrnc'
import { ScrollView } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Flat = () => {
    const getCurrentDay = () => {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDate = new Date();
        return daysOfWeek[currentDate.getDay()];
    };
      const curr=getCurrentDay();
      const todaySch=workoutSchedule[curr];
      const render=({item})=>{
        return(
          <View style={tw`m-4`}>
            <Image source={{uri:item.image}} style={tw`flex h-80 w-80 rounded-10`}/>
            <Text style={tw`flex text-center font-bold text-7`}>{item.name}</Text>
          </View>
        )
      }
  return (
    <GestureHandlerRootView>
    <View style={tw`flex p-3 mb-20`}>
        <Text style={tw`text-2xl font-bold text-center p-5`}>{curr}</Text>
      <FlatList
      data={todaySch.exercises}
      renderItem={render}
      keyExtractor={(exercise) => exercise.name}
      style={tw`flex mb-10`}
      />
    </View>
    </GestureHandlerRootView>
    
  )
}

export default Flat