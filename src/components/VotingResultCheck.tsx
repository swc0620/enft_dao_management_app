import React from "react";
import { Text } from "react-native";
import { List } from "react-native-paper";

type VotingResultCheckProps = {
    index: number;
    telegramId: string;
    shareportion : number;
    voted : boolean;
  };

export const VotingResultCheck = (props: VotingResultCheckProps) => {
    const { index, telegramId, shareportion, voted } = props;
  return (
    <List.Item

      title={`${telegramId}`}
      description ={`${(shareportion*100).toFixed(2)}%`}
      left={(props) => (
        <>
          {
            (index % 10 == 1) &&
            <Text>{index}st stakeholder</Text>}
          {
            (index % 10 == 2) &&
            <Text>{index}nd stakeholder</Text>}  
          {
            (index % 10 == 3) &&
            <Text>{index}rd stakeholder</Text>}
          {
            (index % 10 > 3) &&
            <Text>{index}th stakeholder</Text>}  
        </>
      )}
      right={(props) => (
        <>
          {
            (voted == true) &&
            <Text>Voted</Text>}  
        </>
      )}
    />
  );
}