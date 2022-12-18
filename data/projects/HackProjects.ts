import { PROJECT_ID, BUILDER_ID } from 'data/Ids';
import { ProjectInfo, PROJECT_TYPE } from 'types/Project.type';

export const HackProjects: ProjectInfo[] = [
  {
    id: PROJECT_ID.NORDLE,
    projectType: PROJECT_TYPE.HACK,
    projectName: 'Nordle',
    builders: [BUILDER_ID.JONGWON_PARK, BUILDER_ID.YUMA_TANAKA],
    oneLiner: 'Nordle reimagines a user’s lifetime interaction with NFTs',
    mainImage: '/projects/nordle/NordleMainImage.png',
    description:
      'For a typical NFT project, once art is generated from traits and minted as an NFT, not much happens with the NFT’s art. Nordle is different, it’s interactive with a rewarding mechanism for larger collections.',
    projectLink: 'https://nordle-website.vercel.app/',
    coverImage: '/projects/nordle/NordleMainImage.png',
  },
  {
    id: PROJECT_ID.SMALL_BRAIN_GAMES,
    projectType: PROJECT_TYPE.HACK,
    projectName: 'Small Brain Games',
    builders: [BUILDER_ID.ANONYMOUS_SMALL_BRAIN],
    oneLiner:
      'Small Brain Games builds fully on-chain, open source, casual games.',
    mainImage: '/projects/smallBrainGames/SmallBrainGamesMainImage.png',
    description:
      'Small Brain Games builds games that are:\n1. Are open source and fully on-chain\n2. Are for anybody–not just crypto-native users\n3. Are about persistence and composability (less so than ownership)\nThe first game is Words3, a PvP word game on Optimism. See results at: words3.xyz/stats\nWhy are we doing this? There’s a tension present in web3 go to markets–it’s easier to get early adopters/people excited about the tech, but every “proven” go to market (tokens, pfp drop, etc.) have misaligned incentives. The best way to figure this out is to do the opposite–get as many promising shots on goal as possible.',
    projectLink: 'https://words3.xyz',
    coverImage: '/projects/smallBrainGames/SmallBrainGamesCoverImage.png',
  },
];
