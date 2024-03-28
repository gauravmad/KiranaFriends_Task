import { View, Text } from "react-native";
import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [salesData, setSalesData] = useState([]);

  const addSalesData = (newData) => {
    setSalesData([...salesData, newData]);
  };

  const dataContextValue = {
    salesData,
    addSalesData,
  };

  return (
    <DataContext.Provider value={dataContextValue}>
      {children}
    </DataContext.Provider>
  );
};
