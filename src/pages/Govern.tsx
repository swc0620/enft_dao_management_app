import React, { useEffect, useState } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { GovernerList } from '../components/GovernerList'
import { GovernList } from '../components/GovernList'
import { List } from 'react-native-paper'
import axios from 'axios'
import { Box } from 'victory-native'
import { Governer, NFT } from '../common/types'

export default function Govern() {
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
    <ScrollView nestedScrollEnabled={true}>
      {loading && <Box>Loading..</Box>}
      {govDistributionData && nfts && (
        <>
          <ScrollView>
            <List.Section style={styles.governersList}>
              <List.Subheader> Governers</List.Subheader>
              {govDistributionData.map((value, index) => {
                return (
                  <GovernerList
                    index={index + 1}
                    telegramId={value.telegramId}
                    share={value.share}
                    shareportion={value.share / totalShare}
                    voted={value.voted}
                    key={index + 1}
                  />
                )
              })}
            </List.Section>
          </ScrollView>
          <ScrollView>
            <List.Section style={styles.governsList}>
              <List.Subheader>Governs</List.Subheader>
              {nfts.map((value, index) => {
                return (
                  <GovernList
                    index={index + 1}
                    nftId={value.nftId}
                    price={value.price}
                    votes={value.votes}
                    approveRate={value.approveRate}
                    project={value.project}
                    type={value.type}
                    key={index + 1}
                  />
                )
              })}
            </List.Section>
          </ScrollView>
        </>
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  governersList: {
    justifyContent: 'center'
  },
  governsList: {
    justifyContent: 'center' 
  }
})
