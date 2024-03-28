import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { LineChart } from "react-native-chart-kit";
import { useNavigation } from "@react-navigation/native";
import AddDataScreen from "../screens/AddDataScreen";
import { useData } from "../context/DataContext";

export default function BillsGraphReport() {
  const navigation = useNavigation();

  const { salesData } = useData();
  console.log('Sales Data:', salesData);

  const data = {
    labels: salesData.map((item) => item.date), // Assuming date is stored in salesData
    datasets: [
      {
        data: salesData.map((item) => item.salesAmount), // Assuming salesAmount is stored in salesData
      },
    ],
  };

  console.log('Chart Data:', data);

  return (
    // <>
    <View className="w-[100%] flex flex-col justify-end bg-slate-100 pb-[2vh]">

      <LineChart
        data={data}
        width={300}
        height={200}
        yAxisSuffix="k"
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: "#111",
          backgroundGradientFrom: "#111",
          backgroundGradientTo: "#006C76",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(12, 223, 239, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#fff",
          },
        }}
        bezier
        className="mx-auto rounded-xl my-[1vh] p-[1vh]"
      />
      <TouchableOpacity
        className="bg-cyan-500 p-[1vh] rounded-lg w-[93%] mx-auto"
        onPress={() => navigation.navigate(AddDataScreen)}
      >
        <Text className="text-center text-[2.5vh] text-white">
          Add Daily Sales
        </Text>
      </TouchableOpacity>
    </View>
  );
}
