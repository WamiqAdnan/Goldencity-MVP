// Featured investment properties shown on the home page.
// Kept free of any React/UI dependency so it can later be sourced from a CMS/API
// without touching presentation components.
export const featuredProperties = [
  {
    id: 1,
    title: 'Luxury Downtown Apartment',
    price: {
      usd: 850000,
      eth: 425, // Example ETH value
    },
    location: 'Miami, FL',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    roi: '7.2% Annual',
    metrics: {
      totalInvestors: 142,
      funded: '89%',
      minInvestment: '$10',
    },
    status: 'Active Investment'
  },
  {
    id: 2,
    title: 'Modern Tech District Complex',
    price: {
      usd: 1200000,
      eth: 600,
    },
    location: 'Austin, TX',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    roi: '6.8% Annual',
    metrics: {
      totalInvestors: 203,
      funded: '95%',
      minInvestment: '$10',
    },
    status: 'Almost Funded'
  },
  {
    id: 3,
    title: 'Waterfront Commercial Space',
    price: {
      usd: 2100000,
      eth: 1050,
    },
    location: 'Seattle, WA',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    roi: '7.5% Annual',
    metrics: {
      totalInvestors: 89,
      funded: '45%',
      minInvestment: '$10',
    },
    status: 'New Listing'
  }
];
