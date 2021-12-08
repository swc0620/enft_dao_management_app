import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import PortfolioList from "../components/PortfolioList";
import { List } from "react-native-paper";
import { VictoryPie } from "victory-native";

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
  { x: "Nam", y: 35 },
  { x: "Jang", y: 45 },
  { x: "Jeong", y: 75 },
  { x: "Shin", y: 200 },
];

export default function Portfolio({ navigation }) {
  return (
    <ScrollView>
      <VictoryPie
        colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
        data={dummyStakeData}
      />
      <List.Section style={styles.portfolioList}>
        {portfolioDummy.map((value, index) => {
          return (
            <PortfolioList
              key={index}
              index={index + 1}
              title={value.title}
              description={value.description}
              imageUrl={value.imageUrl}
              price={value.price}
              onPress={() => navigation.navigate("Portfolio Detail")}
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
  portfolioList: {
    justifyContent: "center",
  },
});
