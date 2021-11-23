import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import GovernerList from "../components/GovernerList";
import GovernList, { NftDetail, GovernProgress, ProgressBarFunc } from "../components/GovernList";
import { Avatar, ProgressBar, Text, Colors } from "react-native-paper";



const nftDummy = 
    {
      nftId: "03JNA9",
      price: 20,
      votes: 15,
      approveRate: 15,
      project:'BAYC',
      type:'AVATAR'
    }

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
        <View style = {styles.listing}> 
            <Text>
                asd 
            </Text>
                
        </View>
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
