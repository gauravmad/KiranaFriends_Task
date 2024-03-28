import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React,{useState} from "react";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import DateTimePicker from '@react-native-community/datetimepicker';

export default function DatePickerInput({ label, placeholdertext }) {

  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(false);
    setDate(currentDate);
  };

  const showDatePicker = () => {
    setShowPicker(true);
  };

  return (
    <>
      <View className="my-[2vh]">
        <Text className="text-[2vh] font-normal text-[#6b6b6b] my-[0.5vh]">
          {label}
        </Text>


        <TouchableOpacity onPress={showDatePicker} className="border-b-2 border-[#BDC0CE] flex flex-row justify-between w-full">
          <TextInput
            className="w-[90%] no-underline focus:text-[#111] text-[2.5vh] py-[0.5vh]"
            placeholder={placeholdertext}
            value={date.toLocaleDateString()}
            keyboardType="numeric"
          />
          <MaterialCommunityIcons name="calendar" size={24} color="#888" />
        </TouchableOpacity>
      </View>

      {showPicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}

    </>
  );
}
