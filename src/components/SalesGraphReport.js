import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { LineChart } from "react-native-chart-kit";
import { useNavigation } from "@react-navigation/native";
import AddDataScreen from "../screens/AddDataScreen";
import { useData } from "../context/DataContext";

export default function SalesGraphReport() {
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
            Daily Bills
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
            Add Daily Bills
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
        data: salesData.map((item) => item.totalBills), // Assuming salesAmount is stored in salesData
      },
    ],
  };

  return (
    <>
      <View style={styles.header} className="w-[100%] my-[2vh] flex flex-col justify-end bg-slate-100 py-[2vh]">
        <View className="w-[90%] mx-auto flex flex-row justify-between items-center">
          <Text className="text-[2.2vh] text-pink-800 font-medium">
            Daily Bills
          </Text>
          <Text className="text-[2vh] ">
            Show data: <Text className="font-medium text-pink-600">This Week</Text>
          </Text>
        </View>
          
        <View>
          <LineChart
            data={data}
            width={300}
            height={200}
            yAxisSuffix=""
            yAxisInterval={1}
            chartConfig={{
              backgroundColor: "#111",
              backgroundGradientFrom: "#111",
              backgroundGradientTo: "#7E001F",
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(255, 85, 127, ${opacity})`,
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
        </View>

        <TouchableOpacity
          className="bg-cyan-500 p-[1vh] rounded-lg w-[90%] mx-auto"
          onPress={() => navigation.navigate(AddDataScreen)}
        >
          <Text className="text-center text-[2.5vh] text-white">
            Add Daily Bills
          </Text>
        </TouchableOpacity>
      </View>
    </>
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
