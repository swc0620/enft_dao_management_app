import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { List, Avatar } from "react-native-paper";

type PortfolioListProp = {
  title: string;
  description: string;
  imageUrl: string;
};

export default function PortfolioList(props: PortfolioListProp) {
  const { title, description, imageUrl } = props;
  return (
    <List.Item
      title={title}
      description={description}
      left={(props) => (
        <Avatar.Image
          size={48}
          source={{
            uri: imageUrl,
          }}
        />
      )}
    />
  );
}
