import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import TabRoutes from "./tab.routes";


import StackRoutes from "./stack.routes";

export default function Routes() {
  return (
    <NavigationContainer>
      <TabRoutes />
      {/* <StackRoutes /> */}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

