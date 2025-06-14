export interface AccomplishmentData {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt: string;
}

export const accomplishmentsData: AccomplishmentData[] = [
  {
    title: 'Environmental Justice',
    description: "$175k to renovate Tyrone Crabb Park Splash Pad & defeated Danskammer's fracked gas plant to keep Newburgh's air and water clean",
    imageSrc: '/images/park.jpg',
    imageAlt: 'Tyrone Crabb Park Splash Pad opening ceremony'
  },
  {
    title: 'Economic Development',
    description: 'Secured $42M to reconstruct sewage infrastructure that prepares the Hillside for development',
    imageSrc: '/images/economic-development.jpg',
    imageAlt: 'Road paving work in Newburgh'
  },
  {
    title: 'Infrastructure',
    description: '$5M to repave the roads & $2.2M to replace lead service lines to clean up our drinking water',
    imageSrc: '/images/infrastructure.jpg',
    imageAlt: 'Water infrastructure improvements'
  },
  {
    title: 'Public Safety',
    description: 'Oversaw a 39% decrease in shootings and a 23% decrease property crime',
    imageSrc: '/images/safety.jpg',
    imageAlt: 'Public safety improvements in Newburgh'
  },
  {
    title: 'Housing',
    description: 'Passed Good Cause Eviction to keep families in their home',
    imageSrc: '/images/housing.jpg',
    imageAlt: 'Housing in Newburgh'
  }
];
