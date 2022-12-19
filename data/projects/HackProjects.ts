import { PROJECT_ID, BUILDER_ID } from 'data/Ids';
import { ProjectInfo, PROJECT_TYPE } from 'types/Project.type';

export const HackProjects: ProjectInfo[] = [
  {
    id: PROJECT_ID.SMALL_BRAIN_GAMES,
    projectType: PROJECT_TYPE.HACK,
    projectName: 'Small Brain Games',
    builders: [BUILDER_ID.ANONYMOUS_SMALL_BRAIN],
    oneLiner:
      'Small Brain Games builds fully on-chain, open source, casual games.',
    mainImage: '/projects/smallBrainGames/SmallBrainGamesMainImage.png',
    description:
      'Small Brain Games builds games that are:\n\n1. Are open source and fully on-chain\n\n2. Are for anybody–not just crypto-native users\n\n3. Are about persistence and composability (less so than ownership)\n\nThe first game is Words3, a PvP word game on Optimism. See results at: words3.xyz/stats\n\nWhy are we doing this? There’s a tension present in web3 go to markets–it’s easier to get early adopters/people excited about the tech, but every “proven” go to market (tokens, pfp drop, etc.) have misaligned incentives. The best way to figure this out is to do the opposite–get as many promising shots on goal as possible.',
    projectLink: 'https://words3.xyz',
    coverImage: '/projects/smallBrainGames/SmallBrainGamesCoverImage.png',
  },
  {
    id: PROJECT_ID.NORDLE,
    projectType: PROJECT_TYPE.HACK,
    projectName: 'Nordle',
    builders: [BUILDER_ID.JONGWON_PARK, BUILDER_ID.YUMA_TANAKA],
    oneLiner: 'Nordle reimagines a user’s lifetime interaction with NFTs',
    mainImage: '/projects/nordle/NordleMainImage.gif',
    description:
      'For a typical NFT project, once art is generated from traits and minted as an NFT, not much happens with the NFT’s art. Nordle is different, it’s interactive with a rewarding mechanism for larger collections.\n\nNewly minted NFTs contain simple phrases like "unicorn", "this", or "happy". These phrases are then used as prompts to OpenAI\'s DALL-E to generate the corresponding image. Once the user acquires two or more Nordle NFTs, she can combine the NFTs to produce a new Nordle NFT! If the user owns a “unicorn” NFT and a “happy” NFT, she can call our contract to combine the words in the desired sequence, generating a new random image with the newly combined words. Now the user gets the “happy unicorn” NFT (or “unicorn happy”) and burns the old NFTs (the record is still maintained). This process can be repeated infinitely to fully reap the benefit of DALL-E while rewarding the collection of cool and/or transitory words!',
    projectLink: 'https://nordle-website.vercel.app/',
    coverImage: '/projects/nordle/NordleCoverImage.png',
  },
];
