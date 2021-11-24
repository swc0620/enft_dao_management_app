import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { GovernerVotingCheck, GovernerList } from "../components/GovernerList";
import { GovernList, NftDetail, ProgressBarFunc } from "../components/GovernList";
import { Avatar, ProgressBar, Text, Colors, List } from "react-native-paper";



const nftDummy = 
    {
      nftId: "03JNA9",
      price: 20,
      votes: 3,
      approveRate: 81.81,
      project:'BAYC',
      type:'AVATAR'
    }

const governerDummy = [
    {
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
        
        <View style = {styles.imageContainer}>
            <Avatar.Image
                
                size = {200}
                source={require('../../assets/favicon.png')}
            />
        </View>
        
        <View style={styles.description}>
            <Text>
                <NftDetail 
                    nftId = {nftDummy.nftId}
                    project = {nftDummy.project}
                    type = {nftDummy.type}
                    price = {nftDummy.price}                   
                >
                </NftDetail>
            </Text>
        </View>      
        <View style = {{
            padding:20,        
            backgroundColor: 'grey',
    
        }}> 
            <ProgressBarFunc
                votes = {nftDummy.votes}
                approveRate = {nftDummy.approveRate}>
            </ProgressBarFunc>
        </View>
        <ScrollView>
            <List.Section style={{ justifyContent: "center" }}>
                <List.Subheader>Governers</List.Subheader>
                    {governerDummy.map((v, i) => {
                    return (
                        <GovernerVotingCheck
                            index={i + 1}
                            telegramId = {v.telegramId}
                            share = {v.share}
                            shareportion = {v.share/totalShare}
                            voted = {v.voted}  
                        />
                    );
                    })}
            </List.Section>
                

            
        </ScrollView>
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
      listing: {
        flex: 1,
        height:'100%',
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding:2,
      },

  });
