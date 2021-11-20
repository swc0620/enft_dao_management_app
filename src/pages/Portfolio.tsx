import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { VictoryPie } from 'victory-native';

const dummyStakeData = [
  { x: 'Nam', y: 35 },
  { x: 'Jang', y: 45 },
  { x: 'Jeong', y: 75 },
  { x: 'Shin', y: 200}
]

export default function Portfolio() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Portfolio Screenㅁㄴㄹㅁㅁㄴㄹㄹ</Text>
      <VictoryPie 
        colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
        data={dummyStakeData}
      />
      <Text>Portfolio Screen</Text>
    </View>
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
