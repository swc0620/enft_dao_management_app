import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { GovernerList } from "../components/GovernerList";
import { GovernList }from "../components/GovernList";
import { List } from "react-native-paper";

const governerDummy = [
  {
    telegramId: "jay",
    share: 6,
    voted: true,
  },
  {
    telegramId: "decipher",
    share: 8,
    voted: false,
  },
  {
    telegramId: "potato",
    share: 25,
    voted: true,
  },
  {
    telegramId: "dokwon",
    share: 5,
    voted: true,
  },
];

const totalShare = 44;

const governDummy = [
  {
    nftId: "03JNA9",
    price: 20,
    votes: 3,
    approveRate: 81.81,
    project:'BAYC',
    type:'AVATAR'
  },
  {
    nftId: "SDAFKN3",
    price: 10,
    votes: 30,
    approveRate: 30,
    project:'Decentraland',
    type:'LAND'

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
                  voted = {v.voted}
                />
              );
            })}
        </List.Section>
      </ScrollView>
      <ScrollView>        
        <List.Section style={{ justifyContent: "center" }}>
          <List.Subheader>Governs</List.Subheader>
            {governDummy.map((v, i) => {
              return (
                <GovernList
                  index={i + 1}
                  nftId={v.nftId}
                  price={v.price}
                  votes={v.votes}
                  approveRate={v.approveRate}
                  project = {v.project}
                  type = {v.type}
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