import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Govern from "../pages/Govern";
import Portfolio from "../pages/Portfolio";
import GovernDetail from "../pages/GovernDetail";
import PortfolioDetail from "../pages/PortfolioDetail";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

function TabBar() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Governance"
        component={Govern}
        options={{
          tabBarLabel: "Governance",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-multiple-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Governance Detail"
        component={GovernDetail}
        options={{
          tabBarLabel: "Governance Detail",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-child-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          tabBarLabel: "Portfolio",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="format-list-checks"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Portfolio Detail"
        component={PortfolioDetail}
        options={{
          tabBarLabel: "Portfolio Detail",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="format-paint"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabBar;
