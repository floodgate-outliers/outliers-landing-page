export interface FeaturedSpeaker {
  id: string;
  profileImageURL: string;
  companyImageURL: string;
  name: string;
  lectureTitle: string;
}

export const FeaturedSpeakersInfo: FeaturedSpeaker[] = [
  {
    id: '01',
    profileImageURL: '/featuredSpeakers/AnatolyYakovenko.jpeg',
    companyImageURL: '/featuredSpeakers/Solana.jpg',
    name: 'Anatoly Yakovenko',
    lectureTitle: 'Solana Deep-Dive',
  },
  {
    id: '02',
    profileImageURL: '/featuredSpeakers/JohnPalmer.jpg',
    companyImageURL: '/featuredSpeakers/PartyDAO.jpg',
    name: 'John Palmer',
    lectureTitle: 'Are NFTs Actually Valuable',
  },
  {
    id: '03',
    profileImageURL: '/featuredSpeakers/TinaHe.jpeg',
    companyImageURL: '/featuredSpeakers/Station.jpg',
    name: 'Tina He',
    lectureTitle: 'Importance of Tokenomics',
  },
  {
    id: '04',
    profileImageURL: '/featuredSpeakers/MatteoLeibowitz.jpg',
    companyImageURL: '/featuredSpeakers/Uniswap.jpg',
    name: 'Matteo Leibowitz',
    lectureTitle: 'Uniswap Deep-Dive',
  },
];
