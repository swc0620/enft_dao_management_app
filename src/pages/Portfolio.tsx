import React, { useEffect, useState } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import PortfolioList from '../components/PortfolioList'
import { List } from 'react-native-paper'
import { VictoryPie } from 'victory-native'
import axios from 'axios'
import { Box } from 'victory-native'
import { NFT, portfolioWeight } from '../common/types'

const portfolioDummy = [
  {
    title: 'Dead Pool Collectible',
    description: "Hi I'm dead ... pool",
    imageUrl:
      'https://pbs.twimg.com/profile_images/1208234904405757953/mT0cFOVQ.jpg',
    price: 1000000,
  },
  {
    title: 'Dead Pool Collectible',
    description: "Hi I'm dead ... pool",
    imageUrl:
      'https://pbs.twimg.com/profile_images/1208234904405757953/mT0cFOVQ.jpg',
    price: 1000000,
  },
  {
    title: 'Dead Pool Collectible',
    description: "Hi I'm dead ... pool",
    imageUrl:
      'https://pbs.twimg.com/profile_images/1208234904405757953/mT0cFOVQ.jpg',
    price: 1000000,
  },
  {
    title: 'Dead Pool Collectible',
    description: "Hi I'm dead ... pool",
    imageUrl:
      'https://pbs.twimg.com/profile_images/1208234904405757953/mT0cFOVQ.jpg',
    price: 1000000,
  },
  {
    title: 'Dead Pool Collectible',
    description: "Hi I'm dead ... pool",
    imageUrl:
      'https://pbs.twimg.com/profile_images/1208234904405757953/mT0cFOVQ.jpg',
    price: 1000000,
  },
]

const dummyStakeData = [
  { x: 'Nam', y: 35 },
  { x: 'Jang', y: 45 },
  { x: 'Jeong', y: 75 },
  { x: 'Shin', y: 200 },
]

export default function Portfolio() {
  const [nfts, setVotes] = useState<NFT[] | null>(null)
  const [portfolioWeights, setPortfolioWeights] = useState<
    portfolioWeight[] | null
  >(null)
  const [loading, setLoading] = useState(false)

  async function fetchData() {
    const result = await axios.get(
      'https://us-central1-enft-project.cloudfunctions.net/main/dao/-443191914/detail',
    )

    let nfts: NFT[] = []
    const nft_holdings = result.data.nft_holdings
    let portfolioWeights: portfolioWeight[] = []
    let totalValue: number = 0
    Object.keys(nft_holdings).forEach((k) => {
      nfts.push(nft_holdings[k])
      totalValue += nft_holdings[k].price
    })
    setVotes(nfts)

    Object.keys(nft_holdings).forEach((k) => {
      portfolioWeights.push({
        x: nft_holdings[k].nftId,
        y: nft_holdings[k].price / totalValue,
      })
    })

    setPortfolioWeights(portfolioWeights)

    setLoading(true)
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <ScrollView>
      {loading && <Box>Loading..</Box>}
      {nfts && portfolioWeights && (
        <>
          <VictoryPie
            colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy']}
            data={portfolioWeights}
          />
          <List.Section style={styles.portfolioList}>
            {nfts.map((value, index) => {
              return (
                <PortfolioList
                  index={index + 1}
                  title={value.nftId}
                  description={value.project}
                  imageUrl={value.project}
                  price={value.price}
                />
              )
            })}
          </List.Section>
        </>
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  portfolioList: {
    justifyContent: 'center',
  },
})
