import React from "react";
import { Text } from "react-native";
import { List } from "react-native-paper";

type GovernerListProp = {
  index: number;
  telegramId: string;
  share: number;
  shareportion : number;
};

export default function GovernerList(props: GovernerListProp) {
  const { index, telegramId, share, shareportion } = props;
  return (
    <List.Item

      title={`${telegramId}`}
      description ={`${share} ETH`}
      left={(props) => (
        <>
          {
            (index % 10 == 1) &&
            <Text>{index}st holder</Text>}
          {
            (index % 10 == 2) &&
            <Text>{index}nd holder</Text>}  
          {
            (index % 10 == 3) &&
            <Text>{index}rd holder</Text>}
          {
            (index % 10 > 3) &&
            <Text>{index}th holder</Text>}  
        </>
      )}
      right={(props) => (
        <>
          <Text>{`${(shareportion*100).toFixed(2)}%`}</Text>
        </>
      )}
    />
  );
}
