import React from "react";
import { StyleSheet } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Govern from "./src/pages/Govern";
import Portfolio from "./src/pages/Portfolio";
import Governance from "./src/pages/Governance";

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    
    

    
    <PaperProvider>
      
      <NavigationContainer>
      
        <Stack.Navigator>
        
          <Stack.Screen name="Governance" component={Govern} />
          
          <Stack.Screen name="portfolio" component={Portfolio} />
          <Stack.Screen name="governance" component={Governance} />
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
  