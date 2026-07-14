// Marketing content for the home page. These sections pair copy with a specific
// icon, so the icon component is part of the content definition. (If this ever
// becomes CMS-driven, swap the icon reference for a string key + a lookup map.)
import { FaWallet, FaStore, FaMoneyBillWave, FaExchangeAlt, FaChartLine, FaLock, FaUserCog, FaCoins } from 'react-icons/fa';
import { SiEthereum } from 'react-icons/si';

export const advantages = [
  {
    icon: FaChartLine,
    title: 'Profitability',
    description: 'Target average annual returns of 7% through strategic property investments and efficient management.'
  },
  {
    icon: FaExchangeAlt,
    title: 'Liquidity',
    description: 'Trade your property NFTs anytime on our marketplace, providing unprecedented real estate liquidity.'
  },
  {
    icon: FaLock,
    title: 'No Hidden Fees',
    description: 'Transparent pricing with no entry, exit, or capital gains fees. What you see is what you get.'
  },
  {
    icon: FaUserCog,
    title: 'Hassle-Free Management',
    description: 'ValorNuvesta handles all property management aspects, from maintenance to tenant relations.'
  }
];

export const investmentSteps = [
  {
    icon: FaWallet,
    title: 'Connect Wallet',
    description: 'Connect your cryptocurrency wallet to GoldenCity to start investing.'
  },
  {
    icon: FaStore,
    title: 'Choose Property',
    description: 'Browse our marketplace and select properties that match your investment goals.'
  },
  {
    icon: FaMoneyBillWave,
    title: 'Receive Returns',
    description: 'Collect monthly rental returns directly to your connected wallet.'
  },
  {
    icon: FaExchangeAlt,
    title: 'Flexible Exit',
    description: 'Sell your property NFTs whenever you want through our marketplace.'
  }
];

export const howItWorks = [
  {
    icon: FaCoins,
    title: 'Tokenization',
    description: 'Properties are divided into $10 NFT tokens, making real estate investment accessible to everyone.'
  },
  {
    icon: SiEthereum,
    title: 'Purchase NFTs',
    description: 'Buy property NFTs using cryptocurrency, becoming a fractional owner of the property.'
  },
  {
    icon: FaMoneyBillWave,
    title: 'Monthly Returns',
    description: 'Receive your share of rental income directly to your wallet each month.'
  },
  {
    icon: FaExchangeAlt,
    title: 'Flexible Trading',
    description: 'Hold for passive income or sell your NFTs on our marketplace at any time.'
  }
];
