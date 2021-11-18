import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { List } from "react-native-paper";

type GovernUserListProp = {
  index: number;
  telegramId: string;
  share: number;
};

export default function GovernUserList(props: GovernUserListProp) {
  const { index, telegramId, share } = props;
  return (
    <List.Item
      id={telegramId}
      share={share}
      left={(props) => (
        <>
          <Text>{index}</Text>
        </>
      )}
      right={(props) => (
        <>
          <Text>{`${share}`}</Text>
        </>
      )}
    />
  );
}
