import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import PortfolioList from "../components/PortfolioList";
import { List } from "react-native-paper";
import { VictoryPie } from 'victory-native';

const portfolioDummy = [
  {
    title: "Dead Pool Collectible",
    description: "Hi I'm dead ... pool",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1208234904405757953/mT0cFOVQ.jpg",
    price: 1000000,
  },
  {
    title: "Dead Pool Collectible",
    description: "Hi I'm dead ... pool",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1208234904405757953/mT0cFOVQ.jpg",
    price: 1000000,
  },
  {
    title: "Dead Pool Collectible",
    description: "Hi I'm dead ... pool",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1208234904405757953/mT0cFOVQ.jpg",
    price: 1000000,
  },
  {
    title: "Dead Pool Collectible",
    description: "Hi I'm dead ... pool",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1208234904405757953/mT0cFOVQ.jpg",
    price: 1000000,
  },
  {
    title: "Dead Pool Collectible",
    description: "Hi I'm dead ... pool",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1208234904405757953/mT0cFOVQ.jpg",
    price: 1000000,
  },
];

const dummyStakeData = [
  { x: 'Nam', y: 35 },
  { x: 'Jang', y: 45 },
  { x: 'Jeong', y: 75 },
  { x: 'Shin', y: 200}
]


export default function Portfolio() {
  return (
    <ScrollView>
      <VictoryPie
        colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
        data={dummyStakeData}
      />
      <List.Section style={{ justifyContent: "center" }}>
        {portfolioDummy.map((v, i) => {
          return (
            <PortfolioList
              index={i + 1}
              title={v.title}
              description={v.description}
              imageUrl={v.imageUrl}
              price={v.price}
            />
          );
        })}
      </List.Section>
    </ScrollView>
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