import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import GovernUserList from "../components/GovernUserList";
import GovernList from "../components/GovernList";
import { List } from "react-native-paper";

const governUserDummy = [
  {
    telegramId: "jay",
    share: 10,
  },
  {
    telegramId: "decipher",
    share: 20,
  },
  {
    telegramId: "potato",
    share: 30,
  },
  {
    telegramId: "dokwon",
    share: 40,
  },
];

const governDummy = [
  {
    nftId: "03jna9",
    price: 20,
    votes: 15,
    approveRate: 15,
  },
  {
    nftId: "sdafsj3",
    price: 10,
    votes: 30,
    approveRate: 45,
  },
];

export default function Govern() {
  return (
    <ScrollView>
      <List.Section style={{ justifyContent: "center" }}>
        {governUserDummy.map((v, i) => {
          return (
            <GovernUserList
              index={i + 1}
              id={v.telegramId}
              share={v.share}
            />
          );
        })}
      </List.Section>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});