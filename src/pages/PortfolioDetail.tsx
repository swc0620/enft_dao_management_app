import React from "react";
import { StyleSheet, ScrollView, View, Dimensions } from "react-native";
import { Avatar, Text, List } from "react-native-paper";
import { VotingResultCheck } from "../components/VotingResultCheck";
import { NFTDetailInfo } from "../components/NFTDetailInfo";
import { LineChart } from "react-native-gifted-charts";

const nftDummy = {
    nftId: "03JNA9",
    price: 20,
    votes: 3,
    approveRate: 81.81,
    project:'BAYC',
    type:'AVATAR',
    boughtPrice: 20,
    expectedPrice: 30,
    onVoting: false
}

const governerDummy = [{
        telegramId: "jay",
        share: 6,
        voted: true,
    }, {
        telegramId: "decipher",
        share: 8,
        voted: false,
    }, {
        telegramId: "potato",
        share: 25,
        voted: true,
    }, {
        telegramId: "dokwon",
        share: 5,
        voted: true,
    }
];

const NFTdummyprice = {
    data: [{
            value: 15, label: "Jan"
        }, {
            value: 30, label: "Feb"
        }, {
            value: 26, label: "Jun"
        }, {
            value: 40, label: "Aug"
        }
    ],
    boughtPrice: 20,
    expectedPrice: 30
}
      
const totalShare = 44;

export default function PortfolioDetail() {
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

            <View style={styles.lineChart}>
                <LineChart data={NFTdummyprice.data} />
            </View>

            <View style={styles.prices}>
                <Text>
                    Bought Price: {NFTdummyprice.boughtPrice}
                </Text>
                <Text>
                    Expected Price: {NFTdummyprice.expectedPrice}
                </Text>
            </View>

            <View>
                <List.Section style={styles.votingResult}>
                    <List.Subheader>Governers</List.Subheader>
                        {governerDummy.map((value, index) => {
                            return (
                                <VotingResultCheck
                                    index={index + 1}
                                    telegramId={value.telegramId}
                                    shareportion={value.share/totalShare}
                                    voted={value.voted}
                                    key={index+1}
                                />
                            );
                        })}
                </List.Section>
            </View>
        </ScrollView>
    )
}

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
    lineChart: {
        flex: 1,
        height:'100%',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
        padding:2,
    },
    prices: {
        flex: 1,
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        padding:2,
        textAlign: 'center'
    },
    votingResult: {
        justifyContent: "center"
    }

});
