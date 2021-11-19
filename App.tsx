import React from "react";
import { StyleSheet } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Govern from "./src/pages/Govern";

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    
    

    
    <PaperProvider>
      
      <NavigationContainer>
      
        <Stack.Navigator>
        
          <Stack.Screen name="Governance" component={Govern} />
          
        </Stack.Navigator>
        
        </NavigationContainer>
        
      </PaperProvider>
      
    
  )}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    });
  