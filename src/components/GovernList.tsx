import React from "react";
import { Text } from "react-native";
import { List } from "react-native-paper";

type GovernListProp = {
  index: number;
  nftId: string;
  price: number;
  votes: number;
  approveRate: number;
  project : string;
  type : string;
};

export default function GovernList(props: GovernListProp) {
  const { index, nftId, price, votes, approveRate, project, type } = props;
  return (
    <List.Item
    
      title={`${nftId}`}
      description ={`Purchase for ${price} ETH,\n${project}, ${type}`}
      left={(props) => (
        <>
          {
            (index % 10 == 1) &&
            <Text>{index}st NFT</Text>}
          {
            (index % 10 == 2) &&
            <Text>{index}nd NFT</Text>}  
          {
            (index % 10 == 3) &&
            <Text>{index}rd NFT</Text>}
          {
            (index % 10 > 3) &&
            <Text>{index}th NFT</Text>}  
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
