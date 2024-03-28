import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./src/navigation";
import { DataProvider } from "./src/context/DataContext";

export default function App() {
  return (
    <DataProvider>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </DataProvider>
  );
}
