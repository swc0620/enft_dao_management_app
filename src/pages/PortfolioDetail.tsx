import React, { useEffect, useState } from 'react'
import { StyleSheet, ScrollView, View, Dimensions } from 'react-native'
import { Avatar, Text, List } from 'react-native-paper'
import { VotingResultCheck } from '../components/VotingResultCheck'
import { NFTDetailInfo } from '../components/NFTDetailInfo'
import { LineChart } from 'react-native-gifted-charts'
import axios from 'axios'
import { Box } from 'victory-native'
import { Governer, NFT } from '../common/types'

export default function PortfolioDetail() {
  const [govDistributionData, setgovDistributionData] = useState<
    Governer[] | null
  >(null)
  const [totalShare, setTotalShare] = useState<number>(0)
  const [nfts, setVotes] = useState<NFT[] | null>(null)
  const [loading, setLoading] = useState(false)

  async function fetchData() {
    const result = await axios.get(
      'https://us-central1-enft-project.cloudfunctions.net/main/dao/-443191914/detail',
    )

    console.log(result.data)
    const gov_distribution_raw = result.data.gov_distribution
    let distribution_array: Governer[] = []
    let totalShare: number = 0
    Object.keys(gov_distribution_raw).forEach((k) => {
      distribution_array.push({
        telegramId: gov_distribution_raw[k].telegramId,
        share: gov_distribution_raw[k].eth,
        voted: true,
      })
      totalShare += gov_distribution_raw[k].eth
    })
    setgovDistributionData(distribution_array)
    setTotalShare(totalShare)

    let nfts: NFT[] = []
    const nft_holdings = result.data.nft_holdings
    Object.keys(nft_holdings).forEach((k) => {
      nfts.push(nft_holdings[k])
    })
    setVotes(nfts)

    setLoading(true)
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <ScrollView>
      {loading && <Box>Loading..</Box>}
      {govDistributionData && nfts && (
        <>
          <View style={styles.imageContainer}>
            <Avatar.Image
              size={200}
              source={require('../../assets/favicon.png')}
            />
          </View>
          <View style={styles.description}>
            <Text>
              <NFTDetailInfo
                nftId={nfts[0].nftId}
                project={nfts[0].project}
                type={nfts[0].type}
                price={nfts[0].price}
                onVoting={nfts[0].onVoting}
              ></NFTDetailInfo>
            </Text>
          </View>
          <View style={styles.lineChart}>
            <LineChart data={nfts[0].priceHistory} />
          </View>
          <View style={styles.prices}>
            <Text>Bought Price: {nfts[0].price_buy}</Text>
            <Text>Expected Price: {nfts[0].price_high}</Text>
          </View>
          <View>
            <List.Section style={styles.votingResult}>
              <List.Subheader>Governers</List.Subheader>
              {govDistributionData.map((value, index) => {
                return (
                  <VotingResultCheck
                    index={index + 1}
                    telegramId={value.telegramId}
                    shareportion={value.share / totalShare}
                    voted={value.voted}
                    key={index + 1}
                  />
                )
              })}
            </List.Section>
          </View>
        </>
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 2,
    padding: 10,
    backgroundColor: 'grey',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  description: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 2,
  },
  lineChart: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    padding: 2,
  },
  prices: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    padding: 2,
    textAlign: 'center',
  },
  votingResult: {
    justifyContent: 'center',
  },
})
