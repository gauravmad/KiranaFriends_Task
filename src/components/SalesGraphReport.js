import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react';
import { useNavigation } from "@react-navigation/native";
import AddDataScreen from '../screens/AddDataScreen';

export default function SalesGraphReport() {

  const navigation = useNavigation();

  return (
    <>
      <View className="w-[100%] flex flex-col justify-end bg-slate-100 h-[35vh] my-[3vh]">
        <View>
            
        </View>

        <TouchableOpacity 
            className="bg-cyan-500 p-[1vh] rounded-lg w-[90%] mx-auto"
            onPress={()=>navigation.navigate(AddDataScreen)}
        >
            <Text className="text-center text-[2.5vh] text-white">Add Daily Sales</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}