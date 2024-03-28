import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import AddDataScreen from "./AddDataScreen";
import CustomInput from "../components/CusotmInput";
import BillsGraphReport from "../components/BillsGraphReport";
import SalesGraphReport from "../components/SalesGraphReport";
import { useData } from "../context/DataContext";

export default function MainScreen() {

  const navigation = useNavigation();
  const { salesData } = useData();

  const averageDailySales = () => {
    if (salesData.length === 0) {
      return 0.0;
    }
    const totalSales = salesData.reduce((total, item) => total + item.salesAmount, 0);
    return (totalSales / salesData.length.toFixed(2));
  };

  const salesPerSqFt = () => {
    if (salesData.length === 0) {
      return 0.0;
    }
    const totalStoreSize = salesData.reduce((total, item) => total + item.storeSize, 0);
    return (averageDailySales() / totalStoreSize).toFixed(2);
  };

  const averageBillValue = () => {
    if (salesData.length === 0) {
      return 0.0;
    }
    const totalBills = salesData.reduce((total, item) => total + item.totalBills, 0);
    return (averageDailySales() / totalBills).toFixed(2);
  };


  return (
    <View className="bg-white h-full">
      <View
        style={styles.header}
        className="header flex flex-row justify-start items-center pt-[6vh] pb-[2vh] shadow-lg"
      >
        <TouchableOpacity>
          <Image
            className="w-[5vh] h-[5vh] mx-[1vh]"
            source={require("../assets/images/chevron-left-arrow.png")}
          />
        </TouchableOpacity>
        <Text className="text-[2.8vh] text-center font-medium">
          Key Performance Indicators
        </Text>
      </View>

      <ScrollView>
        <View
          style={styles.header2}
          className="w-[90%] mx-auto my-[2vh] p-[1.5vh] rounded-lg"
        >
          <Text className="text-[2.4vh] font-semibold my-[2vh]">
            Current Month KPI Summary
          </Text>

          <View className="flex flex-row justify-between ">
            <View className="w-[30%]">
              <Text className="text-[3.6vh] font-bold text-[#23CDD6]">{averageDailySales()}</Text>
              <Text className="text-[2vh] font-semibold">
                Average Daily Sales
              </Text>
            </View>
            <View className="w-[30%]">
              <Text className="text-[3.6vh] font-bold text-[#E83F94]">{averageBillValue()}</Text>
              <Text className="text-[2vh] font-semibold">
                Average Bill Values
              </Text>
            </View>
            <View className="w-[30%]">
              <Text className="text-[3.6vh] font-bold text-[#8366FF]">{salesPerSqFt()}</Text>
              <Text className="text-[2vh] font-semibold">
                Settles per Sq. Ft
              </Text>
            </View>
          </View>
        </View>

        <View className="w-[90%] mx-auto">
          <BillsGraphReport />
          <SalesGraphReport data={salesData} />
        </View>
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
    shadowOpacity: 0.55,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header2: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
});
