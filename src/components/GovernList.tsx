import React from "react";
import { Text } from "react-native";
import { List, ProgressBar, Colors  } from "react-native-paper";
import { Icon } from "react-native-paper/lib/typescript/components/Avatar/Avatar";

type GovernListProp = {
  index: number;
  nftId: string;
  price: number;
  votes: number;
  approveRate: number;
  project : string;
  type : string;
};

export function GovernList(props: GovernListProp) {
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

export function NftDetail(props: GovernListProp) {
  const { nftId, price, project, type } = props;
  return (
    <List.Item
      title={`NFT ID : ${nftId}`}
      description ={`${type} type of ${project} project on voting for ${price} ETH`}
    />
  );
}

export function ProgressBarFunc(props: GovernListProp) {
  const { votes, approveRate } = props;
  return (
    <>
      <Text style={{padding : 3}}>
        {approveRate}% of Total Governers Approved. ({votes} Voted)
      </Text>         
      <ProgressBar 
          progress={approveRate/100} 
          color={Colors.red800}
          style={{
                  backgroundColor:'white'
                }}
      >
      </ProgressBar>
    </>
  )}



