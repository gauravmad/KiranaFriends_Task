import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import MainScreen from "./MainScreen";
import CustomInput from "../components/CusotmInput";
import DatePickerInput from "../components/DatePickerInput";
import { useData } from "../context/DataContext";

export default function AddDataScreen() {
  const navigation = useNavigation();

  const { addSalesData } = useData();

  const [date, setDate] = useState("");
  const [salesAmount, setSalesAmount] = useState("");
  const [totalBills, setTotalBills] = useState("");
  const [storeSize, setStoreSize] = useState("");

  const handleDateChange = (text) => setDate(text);
  const handleSalesAmountChange = (text) => setSalesAmount(text);
  const handleTotalBillsChange = (text) => setTotalBills(text);
  const handleStoreSizeChange = (text) => setStoreSize(text);

  const handleAddData = () => {
    const newData = { 
      date, 
      salesAmount: parseFloat(salesAmount),
      totalBills:parseFloat(totalBills),
      storeSize:parseFloat(storeSize)
    }; 
    addSalesData(newData);
    setSalesAmount("");
    setDate("");
    navigation.navigate(MainScreen);
  };

  return (
    <View className="bg-white h-full">
      <View
        style={styles.header}
        className="header flex flex-row justify-start items-center pt-[6vh] pb-[2vh] shadow-lg"
      >
        <TouchableOpacity onPress={() => navigation.navigate(MainScreen)}>
          <Image
            className="w-[5vh] h-[5vh] mx-[1vh]"
            source={require("../assets/images/chevron-left-arrow.png")}
          />
        </TouchableOpacity>
        <Text className="text-[2.8vh] text-center font-medium">
          Add Daily Sales
        </Text>
      </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <KeyboardAvoidingView className="flex-1" behavior="padding">
          <View className="w-[90%] mx-auto my-[1vh]">
            <DatePickerInput
              label="Select Date"
              placeholdertext="DD/MM/YYYY"
              value={date}
              onChangeText={handleDateChange}
            />

            <CustomInput
              label="Add Daily Sales Amount"
              placeholdertext="₹"
              value={salesAmount}
              onChangeText={handleSalesAmountChange}
            />
            <CustomInput
              label="Add Total Number of Bills"
              placeholder="0"
              value={totalBills}
              onChangeText={handleTotalBillsChange}
            />
            <CustomInput
              label="Store Size (In Sq. Ft.)"
              placeholder="0"
              value={storeSize}
              onChangeText={handleStoreSizeChange}
            />

            <TouchableOpacity
              onPress={handleAddData}
              className="bg-orange-600 p-[1vh] rounded-xl text-white my-[2vh]"
            >
              <Text className="text-[2.7vh] text-center text-white font-semibold">
                Add
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
