import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import GovernerList from "../components/GovernerList";
import GovernList from "../components/GovernList";
import { List } from "react-native-paper";

const governerDummy = [
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

const totalShare = 100;

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
    <ScrollView nestedScrollEnabled = {true}>
      <ScrollView>        
        <List.Section style={{ justifyContent: "center" }}>
          <List.Subheader> Governers</List.Subheader>
            {governerDummy.map((v, i) => {
              return (
                <GovernerList
                  index={i + 1}
                  telegramId={v.telegramId}
                  share={v.share}
                  shareportion = {v.share/totalShare}
                />
              );
            })}
        </List.Section>
      </ScrollView>
      <ScrollView>        
        <List.Section style={{ justifyContent: "center" }}>
          <List.Subheader> Governs</List.Subheader>
            {governDummy.map((v, i) => {
              return (
                <GovernList
                  index={i + 1}
                  nftId={v.nftId}
                  price={v.price}
                  votes={v.votes}
                  approveRate={v.approveRate}
                />
              );
            })}
        </List.Section>
      </ScrollView>
    </ScrollView> 
    );
  }

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});