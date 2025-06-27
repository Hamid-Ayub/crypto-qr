export const cryptocurrencies = [
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    symbol: 'BTC',
    logo: 'https://raw.githubusercontent.com/Cryptofonts/cryptoicons/master/SVG/btc.svg',
    protocol: 'bitcoin'
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    symbol: 'ETH',
    logo: 'https://raw.githubusercontent.com/Cryptofonts/cryptoicons/master/SVG/eth.svg',
    protocol: 'ethereum'
  },
  {
    id: 'binancecoin',
    name: 'BNB',
    symbol: 'BNB',
    logo: 'https://raw.githubusercontent.com/Cryptofonts/cryptoicons/master/SVG/bnb.svg',
    protocol: 'ethereum'
  },
  {
    id: 'cardano',
    name: 'Cardano',
    symbol: 'ADA',
    logo: 'https://raw.githubusercontent.com/Cryptofonts/cryptoicons/master/SVG/ada.svg',
    protocol: 'cardano'
  },
  {
    id: 'solana',
    name: 'Solana',
    symbol: 'SOL',
    logo: 'https://raw.githubusercontent.com/Cryptofonts/cryptoicons/master/SVG/sol.svg',
    protocol: 'solana'
  },
  {
    id: 'ripple',
    name: 'XRP',
    symbol: 'XRP',
    logo: 'https://raw.githubusercontent.com/Cryptofonts/cryptoicons/master/SVG/xrp.svg',
    protocol: 'ripple'
  },
  {
    id: 'polkadot',
    name: 'Polkadot',
    symbol: 'DOT',
    logo: 'https://raw.githubusercontent.com/Cryptofonts/cryptoicons/master/SVG/dot.svg',
    protocol: 'polkadot'
  },
  {
    id: 'dogecoin',
    name: 'Dogecoin',
    symbol: 'DOGE',
    logo: 'https://raw.githubusercontent.com/Cryptofonts/cryptoicons/master/SVG/doge.svg',
    protocol: 'dogecoin'
  },
  {
    id: 'avalanche',
    name: 'Avalanche',
    symbol: 'AVAX',
    logo: 'https://raw.githubusercontent.com/Cryptofonts/cryptoicons/master/SVG/avax.svg',
    protocol: 'ethereum'
  },
  {
    id: 'polygon',
    name: 'Polygon',
    symbol: 'MATIC',
    logo: 'https://raw.githubusercontent.com/Cryptofonts/cryptoicons/master/SVG/matic.svg',
    protocol: 'ethereum'
  },
  {
    id: 'chainlink',
    name: 'Chainlink',
    symbol: 'LINK',
    logo: 'https://raw.githubusercontent.com/Cryptofonts/cryptoicons/master/SVG/link.svg',
    protocol: 'ethereum'
  },
  {
    id: 'uniswap',
    name: 'Uniswap',
    symbol: 'UNI',
    logo: 'https://raw.githubusercontent.com/Cryptofonts/cryptoicons/master/SVG/uni.svg',
    protocol: 'ethereum'
  },
  {
    id: 'litecoin',
    name: 'Litecoin',
    symbol: 'LTC',
    logo: 'https://raw.githubusercontent.com/Cryptofonts/cryptoicons/master/SVG/ltc.svg',
    protocol: 'litecoin'
  },
  {
    id: 'bitcoincash',
    name: 'Bitcoin Cash',
    symbol: 'BCH',
    logo: 'https://raw.githubusercontent.com/Cryptofonts/cryptoicons/master/SVG/bch.svg',
    protocol: 'bitcoincash'
  },
  {
    id: 'stellar',
    name: 'Stellar',
    symbol: 'XLM',
    logo: 'https://raw.githubusercontent.com/Cryptofonts/cryptoicons/master/SVG/xlm.svg',
    protocol: 'stellar'
  },
  {
    id: 'tron',
    name: 'TRON',
    symbol: 'TRX',
    logo: 'https://raw.githubusercontent.com/Cryptofonts/cryptoicons/master/SVG/trx.svg',
    protocol: 'tron'
  },
  {
    id: 'monero',
    name: 'Monero',
    symbol: 'XMR',
    logo: 'https://raw.githubusercontent.com/Cryptofonts/cryptoicons/master/SVG/xmr.svg',
    protocol: 'monero'
  },
  {
    id: 'eos',
    name: 'EOS',
    symbol: 'EOS',
    logo: 'https://raw.githubusercontent.com/Cryptofonts/cryptoicons/master/SVG/eos.svg',
    protocol: 'eos'
  },
  {
    id: 'tezos',
    name: 'Tezos',
    symbol: 'XTZ',
    logo: 'https://raw.githubusercontent.com/Cryptofonts/cryptoicons/master/SVG/xtz.svg',
    protocol: 'tezos'
  },
  {
    id: 'vechain',
    name: 'VeChain',
    symbol: 'VET',
    logo: 'https://raw.githubusercontent.com/Cryptofonts/cryptoicons/master/SVG/vet.svg',
    protocol: 'ethereum'
  }
];

export const getCryptoBySymbol = (symbol) => {
  return cryptocurrencies.find(crypto => crypto.symbol.toLowerCase() === symbol.toLowerCase());
};

export const getCryptoById = (id) => {
  return cryptocurrencies.find(crypto => crypto.id === id);
}; 