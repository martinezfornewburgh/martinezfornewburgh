export interface AccomplishmentData {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt: string;
}

export const accomplishmentsData: AccomplishmentData[] = [
  {
    title: 'Local Parks',
    description: 'Delivered $175,000 for the Tyrone Crabb Park Splash Pad',
    imageSrc: '/images/park.jpg',
    imageAlt: 'Tyrone Crabb Park Splash Pad opening ceremony'
  },
  {
    title: 'Repaved Roads',
    description: 'Secured nearly $5million for paving roads with majority funding going to Ward 1',
    imageSrc: '/images/roads.jpg',
    imageAlt: 'Road paving work in Newburgh'
  },
  {
    title: 'Infrastructure',
    description: 'Secured 2.2million for lead services line replacements to improve drinking water safety',
    imageSrc: '/images/infrastructure.jpg',
    imageAlt: 'Water infrastructure improvements'
  },
  {
    title: 'Public Safety',
    description: '39% decrease in shooting incidents & 23% decrease in property crime over a 3 year average',
    imageSrc: '/images/safety.jpg',
    imageAlt: 'Public safety improvements in Newburgh'
  },
  {
    title: 'Housing',
    description: 'Championed housing justice legislation such as Good Cause Eviction',
    imageSrc: '/images/housing.jpg',
    imageAlt: 'Housing in Newburgh'
  }
];
