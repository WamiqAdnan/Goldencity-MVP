// Blog categories and the latest posts previewed on the home page.
export const categories = [
  { id: 'all', name: 'All Posts' },
  { id: 'crypto', name: 'Cryptocurrency' },
  { id: 'investment', name: 'Investment' },
  { id: 'property', name: 'Property' },
  { id: 'technology', name: 'Technology' },
  { id: 'market', name: 'Market Analysis' }
];

export const blogPosts = [
  {
    id: 1,
    title: 'The Future of Real Estate: Cryptocurrency Payments and Blockchain Technology',
    slug: 'future-real-estate-crypto-payments',
    excerpt: 'Explore how cryptocurrency and blockchain are revolutionizing property transactions and investment opportunities.',
    image: 'https://images.unsplash.com/photo-1516245834210-c4c142787335?w=800&q=80',
    category: 'crypto',
    author: 'Sarah Johnson',
    date: '2024-03-15',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'Understanding Tokenized Real Estate Investment',
    slug: 'understanding-tokenized-real-estate',
    excerpt: "A comprehensive guide to property tokenization and how it's making real estate investment more accessible.",
    image: 'https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=800&q=80',
    category: 'investment',
    author: 'Michael Chen',
    date: '2024-03-12',
    readTime: '7 min read'
  },
  {
    id: 3,
    title: 'Smart Contracts in Real Estate Transactions',
    slug: 'smart-contracts-real-estate',
    excerpt: 'How smart contracts are streamlining property transactions and reducing costs.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    category: 'technology',
    author: 'David Rodriguez',
    date: '2024-03-10',
    readTime: '6 min read'
  }
];
