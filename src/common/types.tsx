export type Governer = {
  telegramId: string
  share: number
  voted: boolean
}

export type historyPoint = {
  value: number
  label: string
}

export type NFT = {
  nftId: string
  price: number
  price_buy: number
  price_high: number
  votes: number
  approveRate: number
  project: string
  type: string
  onVoting: boolean
  priceHistory: historyPoint[]
}

export type portfolioWeight = {
  x: string
  y: number
}
