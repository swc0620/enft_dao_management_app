import React from "react";
import { Text } from "react-native";
import { ProgressBar, Colors } from "react-native-paper";

type GovernListProps = {
  votes: number;
  approveRate: number;
  children?: React.ReactNode;
};

export function ProgressBarFunc(props: GovernListProps) {
  const { votes, approveRate } = props;
  return (
    <>
      <Text style={{ padding: 3 }}>
        {approveRate}% of Total Governers Approved. ({votes} Voted)
      </Text>
      <ProgressBar
        progress={approveRate / 100}
        color={Colors.red800}
        style={{
          backgroundColor: "white",
        }}
      ></ProgressBar>
    </>
  );
}
