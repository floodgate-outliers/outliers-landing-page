import { PROJECT_ID, BUILDER_ID } from 'data/Ids';
import { ProjectInfo, PROJECT_TYPE } from 'types/Project.type';
import { HackProjects } from './HackProjects';
import { StartupProjects } from './StartupProjects';

export const getProjectInfoById = (projectId: PROJECT_ID): ProjectInfo => {
  let summerProject = SummerProjects.find((p) => p.id === projectId);
  if (summerProject) {
    return summerProject;
  }
  let startupProject = StartupProjects.find((p) => p.id === projectId);
  if (startupProject) {
    return startupProject;
  }
  let hackProject = HackProjects.find((p) => p.id === projectId);
  // The project id will correspond to exactly one of Summer, Startup, or Hack projects
  return hackProject!;
};

export const SummerProjects: ProjectInfo[] = [
  {
    id: PROJECT_ID.UNFOLD,
    projectType: PROJECT_TYPE.SUMMER,
    projectName: 'Unfold',
    builders: [BUILDER_ID.VARUN_SHENOY],
    oneLiner:
      'A small, sandboxed scripting language for querying crypto wallets and tokengating content.',
    mainImage: '/projects/unfold/UnfoldMainImage.jfif',
    description:
      "Excited to share a project i've been working on: a  scripting language for querying crypto wallets 📖🔍 it has a small (but expressive) grammar, so anyone can quickly write a short program and run it in a safe, sandboxed runtime environment⚡️",
    projectLink: 'https://varunshenoy.com/unfold/',
    coverImage: '/projects/unfold/UnfoldMainImage.jfif',
  },
  {
    id: PROJECT_ID.CONVEXSWAP,
    projectType: PROJECT_TYPE.SUMMER,
    projectName: 'ConvexSwap',
    builders: [BUILDER_ID.SARA_ABDALI, BUILDER_ID.ERFAN_ROSTAMI],
    oneLiner:
      'ConvexSwap allows large trades to be streamed over time to reduce slippage and price impact while also minimizing for gas.',
    mainImage: '/projects/convexSwap/ConvexSwapMainImage.jpg',
    description:
      'While executing large trades, there is often a high amount of slippage. As these orders get close to completion, the swap price increases drastically, and therefore the trade ends up being expensive and capital inefficient. Additionally, with large trades on the blockchain, the security risks are heightened as nothing is reversible. ConvexSwap solves both of these problems by streaming the trade over time. The stream cannot only be stopped at any time for security purposes, but also prevents a price shock on the exchanges and ensures that there is time for liquidity pools to revert to their average volume, so slippage will be lower. While streaming leads to price impact, it increases the gas fees as multiple transtaction happen to complete the trade. This leads to a convex cost function for any trade that can be solved for deterministically. Our trading platform solves for this optimal value of streaming time with lowest slippage and gas fees.',
    projectLink: 'https://outliersnft.xyz/',
    coverImage: '/projects/convexSwap/ConvexSwapMainImage.jpg',
  },
  {
    id: PROJECT_ID.THUNDER_LIZARD_NFT,
    projectType: PROJECT_TYPE.SUMMER,
    projectName: 'Thunder Lizard NFT',
    builders: [BUILDER_ID.JOYCE_JIANG],
    oneLiner:
      'NFT representing the incredible builders in the Outliers program',
    mainImage: '/projects/thunderLizardNFT/ThunderLizardMainImage.png',
    description:
      'Outliers is a 10-week, summer program to empower exceptional builder builders in Crypto and Web3. Through curriculum and technical projects, Outliers equips builders from across the country with the resources, knowledge, and community necessary to build and scale a successful Web3 venture.',
    projectLink: 'https://outliersnft.xyz/',
    coverImage: '/projects/thunderLizardNFT/ThunderLizardCoverImage.gif',
  },
];
