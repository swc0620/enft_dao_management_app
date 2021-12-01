import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { Avatar, Text, List } from "react-native-paper";
import { VotingResultCheck } from "../components/VotingResultCheck";
import { NFTDetailInfo } from "../components/NFTDetailInfo";
import { ProgressBarFunc } from "../components/ProgressBarFunc";

const nftDummy = {
    nftId: "03JNA9",
    price: 20,
    votes: 3,
    approveRate: 81.81,
    project:'BAYC',
    type:'AVATAR',
    onVoting: true
}

const governerDummy = [{
        telegramId: "jay",
        share: 6,
        voted: true,
    },
    {
        telegramId: "decipher",
        share: 8,
        voted: false,
    },
    {
        telegramId: "potato",
        share: 25,
        voted: true,
    },
    {
        telegramId: "dokwon",
        share: 5,
        voted: true,
    },
];
      
const totalShare = 44;    

function GovernDetail(){
    return(
        <ScrollView>
            <View style={styles.imageContainer}>
                <Avatar.Image
                    size={200}
                    source={require('../../assets/favicon.png')}
                />
            </View>
            
            <View style={styles.description}>
                <Text>
                    <NFTDetailInfo 
                        nftId={nftDummy.nftId}
                        project={nftDummy.project}
                        type={nftDummy.type}
                        price={nftDummy.price}
                        onVoting={nftDummy.onVoting}
                    >
                    </NFTDetailInfo>
                </Text>
            </View>

            <View style={ styles.progressBar }> 
                <ProgressBarFunc
                    votes={nftDummy.votes}
                    approveRate={nftDummy.approveRate}>
                </ProgressBarFunc>
            </View>
            
            <List.Section style={ styles.votingResult }>
                <List.Subheader>Governers</List.Subheader>
                    {governerDummy.map((value, index) => {
                    return (
                        <VotingResultCheck
                            index={index + 1}
                            telegramId={value.telegramId}
                            shareportion={value.share/totalShare}
                            voted={value.voted}  
                        />
                    );
                    })}
            </List.Section>
        </ScrollView>
    )
}
export default GovernDetail

const styles = StyleSheet.create({
    imageContainer: {
        flex: 2,
        padding: 10,
        backgroundColor: 'grey',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
        
    },
    description: {
        flex: 1,
        height:'100%',
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding:2,
    },
    progressBar: {
        padding:20,        
        backgroundColor: 'grey',
    
    },
    votingResult: {
        justifyContent: "center"
    }
  }
);
