import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { LineChart } from "react-native-chart-kit";
import { useNavigation } from "@react-navigation/native";
import AddDataScreen from "../screens/AddDataScreen";
import { useData } from "../context/DataContext";

export default function BillsGraphReport() {
  const navigation = useNavigation();
  const { salesData } = useData();

  if (salesData.length === 0) {

    return (
      <View
        style={styles.header}
        className="flex relative flex-col justify-end pb-[1.5vh]"
      >
        <View className="relative">
          <Text className="absolute z-20 text-[2.2vh] font-semibold left-[2.7vh] top-[2vh]">
            Daily Sales
          </Text>
          <Text className="absolute z-20 right-[2.7vh] top-[2vh]">
            Show data: <Text className="font-medium">This Week</Text>
          </Text>
          <Image
            className="w-[40vh] h-[30vh] mx-auto rounded-lg my-[1vh]"
            source={require("../assets/images/nodata.jpg")}
          />
        </View>
        <TouchableOpacity
          className="bg-cyan-500 p-[1vh] rounded-lg w-[93%] mx-auto"
          onPress={() => navigation.navigate(AddDataScreen)}
        >
          <Text className="text-center text-[2.5vh] font-medium text-white">
            Add Daily Sales
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  console.log("Sales Data:", salesData);

  const data = {
    labels: salesData.map((item) => item.date), // Assuming date is stored in salesData
    datasets: [
      {
        data: salesData.map((item) => item.salesAmount), // Assuming salesAmount is stored in salesData
      },
    ],
  };

  console.log("Chart Data:", data);

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
          formatYLabel: (value) => `₹${value}`,
          formatXLabel: (value) => {
            const date = new Date(value);
            return `${
              date.getMonth() + 1
            }/${date.getDate()}/${date.getFullYear()}`;
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
