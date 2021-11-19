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
    
      title={`${nftId}`}
      description ={`Purchasing for ${price} ETH`}
      left={(props) => (
        <>
          {
            (index % 10 == 1) &&
            <Text>{index}st govern</Text>}
          {
            (index % 10 == 2) &&
            <Text>{index}nd govern</Text>}  
          {
            (index % 10 == 3) &&
            <Text>{index}rd govern</Text>}
          {
            (index % 10 > 3) &&
            <Text>{index}th govern</Text>}  
        </>
      )}
      right={(props) => (
        <>
          <Text>{`${votes} voted (${approveRate}% completed)`}</Text>
        </>
      )}
    />
  );
}
