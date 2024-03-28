import { View, Text, TextInput } from 'react-native'
import React from 'react'

export default function CustomInput({label, placeholdertext, value, onChangeText}) {
  return (
    <View className="my-[1.5vh]">
      <Text className="text-[2vh] font-normal text-[#6b6b6b] my-[0.5vh]">{label}</Text>
      <TextInput 
        className="border-b-2 no-underline border-[#BDC0CE] focus:text-[#111] text-[2.5vh] py-[0.5vh]"
        placeholder={placeholdertext}
        value={value}
        onChangeText={onChangeText}
        keyboardAppearance='default'
        keyboardType='numeric'
      />
    </View>
  )
}