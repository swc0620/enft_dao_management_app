import React from "react";
import { List } from "react-native-paper";

type NFTDetailInfoProps = {
  nftId: string;
  price: number;
  project: string;
  type: string;
  onVoting: boolean;
  children?: React.ReactNode;
};

export function NFTDetailInfo(props: NFTDetailInfoProps) {
  const { nftId, price, project, type, onVoting } = props;
  if (onVoting) {
    return (
      <List.Item
        title={`NFT ID : ${nftId}`}
        description={`${type} type of ${project} project on voting for ${price} ETH`}
      />
    );
  } else {
    return (
      <List.Item
        title={`NFT ID : ${nftId}`}
        description={`${type} type of ${project} project`}
      />
    );
  }
}
