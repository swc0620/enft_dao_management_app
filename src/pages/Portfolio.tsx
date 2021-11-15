import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PortfolioList from "../components/PortfolioList";
import { List } from "react-native-paper";

const portfolioDummy = [
  {
    title: "Dead Pool Collectible",
    description: "Hi I'm dead ... pool",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1208234904405757953/mT0cFOVQ.jpg",
  },
  {
    title: "Dead Pool Collectible",
    description: "Hi I'm dead ... pool",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1208234904405757953/mT0cFOVQ.jpg",
  },
  {
    title: "Dead Pool Collectible",
    description: "Hi I'm dead ... pool",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1208234904405757953/mT0cFOVQ.jpg",
  },
  {
    title: "Dead Pool Collectible",
    description: "Hi I'm dead ... pool",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1208234904405757953/mT0cFOVQ.jpg",
  },
  {
    title: "Dead Pool Collectible",
    description: "Hi I'm dead ... pool",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1208234904405757953/mT0cFOVQ.jpg",
  },
];

export default function Portfolio() {
  return (
    <View>
      <List.Section style={{ justifyContent: "center" }}>
        {portfolioDummy.map((v) => {
          return (
            <PortfolioList
              title={v.title}
              description={v.description}
              imageUrl={v.imageUrl}
            />
          );
        })}
      </List.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
