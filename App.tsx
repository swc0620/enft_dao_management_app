import React from "react";
import { StyleSheet } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabBar from "./src/components/TabBar";
import SignInPage from "./src/components/SignInPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MAIN"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="SIGNIN" component={SignInPage} />
          <Stack.Screen name="TABBAR" component={TabBar} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
