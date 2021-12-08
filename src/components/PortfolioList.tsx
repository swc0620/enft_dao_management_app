import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { List, Avatar } from "react-native-paper";

type PortfolioListProp = {
  index: number;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  onPress?: () => void;
};

export default function PortfolioList(props: PortfolioListProp) {
  const { title, description, imageUrl, index, price, onPress } = props;
  return (
    <List.Item
      title={title}
      description={description}
      left={(props) => (
        <>
          <Text>{index}</Text>
          <Avatar.Image
            size={48}
            source={{
              uri: imageUrl,
            }}
          />
        </>
      )}
      right={(props) => (
        <>
          <Text>{`$${price}`}</Text>
        </>
      )}
      onPress={onPress}
    />
  );
}
