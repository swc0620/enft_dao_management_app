import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { List } from "react-native-paper";

type GovernListProp = {
  index: number;
  nftId: string;
  price: number;
  votes: number;
  approveRate: number;
};

export default function GovernList(props: GovernListProp) {
  const { index, nftId, price, votes, approveRate } = props;
  return (
    <List.Item
      nftId={nftId}
      price={price}
      votes = {votes}
      approveRate={approveRate}
    />
  )};