import { BUILDER_ID, PROJECT_ID } from 'data/Ids';
import { BuilderInfo } from 'types/Community';

export const TheBuildersInfos: BuilderInfo[] = [
  {
    id: BUILDER_ID.DANIEL_MARIN,
    twitterHandle: 'danielmarinq',
    profileImageUrl: '/builders/DanielMarin.jfif',
    projectId: PROJECT_ID.NEXUS,
  },
  {
    id: BUILDER_ID.ERFAN_ROSTAMI,
    twitterHandle: '_erfie',
    profileImageUrl: '/builders/ErfanRostami.jpg',
    projectId: PROJECT_ID.CONVEXSWAP,
  },
  {
    id: BUILDER_ID.JAN_DAMM,
    twitterHandle: 'jh_damm',
    profileImageUrl: '/builders/JanDamm.jpg',
    projectId: PROJECT_ID.DATALEAP,
  },
  {
    id: BUILDER_ID.JAN_RUETTINGER,
    twitterHandle: 'jan_ruettinger',
    profileImageUrl: '/builders/JanRuettinger.jpg',
    projectId: PROJECT_ID.DATALEAP,
  },
  {
    id: BUILDER_ID.JONGWON_PARK,
    twitterHandle: 'jwpark02',
    profileImageUrl: '/builders/JongwonPark.jpg',
    projectId: PROJECT_ID.NORDLE,
  },
  {
    id: BUILDER_ID.JOYCE_JIANG,
    twitterHandle: 'joycebydsgn',
    profileImageUrl: '/builders/JoyceJiang.jpg',
    projectId: PROJECT_ID.THUNDER_LIZARD_NFT,
  },
  {
    id: BUILDER_ID.KAILI_WANG,
    twitterHandle: 'kaili_jenner',
    profileImageUrl: '/builders/KailiWang.JPG',
    projectId: PROJECT_ID.REVERSIBILITY_ON_ETHEREUM,
  },
  {
    id: BUILDER_ID.MICHAEL_DAIGLER,
    twitterHandle: '0xmerkle',
    profileImageUrl: '/builders/MichaelDaigler.jpeg',
  },
  {
    id: BUILDER_ID.SANTIAGO_HERNANDEZ,
    twitterHandle: 'santiaghini',
    profileImageUrl: '/builders/SantiagoHernandez.jpeg',
  },
  {
    id: BUILDER_ID.SARA_ABDALI,
    twitterHandle: 'sara__abdali',
    profileImageUrl: '/builders/SaraAbdali.jfif',
    projectId: PROJECT_ID.CONVEXSWAP,
  },
  {
    id: BUILDER_ID.ANONYMOUS_SMALL_BRAIN,
    twitterHandle: '0xsmallbrain',
    profileImageUrl: '/builders/AnonymousSmallBrain.png',
    projectId: PROJECT_ID.SMALL_BRAIN_GAMES,
  },
  {
    id: BUILDER_ID.VARUN_SHENOY,
    twitterHandle: 'varunshenoy_',
    profileImageUrl: '/builders/VarunShenoy.jpg',
    projectId: PROJECT_ID.UNFOLD,
  },
  {
    id: BUILDER_ID.WENITTE_APIOU,
    twitterHandle: 'wenitte0',
    profileImageUrl: '/builders/WenitteApiou.jfif',
    // projectId: PROJECT_ID.DAEDALUS,
  },
  {
    id: BUILDER_ID.YUMA_TANAKA,
    twitterHandle: 'yumat_10',
    profileImageUrl: '/builders/YumaTanaka.jpeg',
    projectId: PROJECT_ID.NORDLE,
  },
];

export const getBuilderInfoById = (builderId: BUILDER_ID): BuilderInfo => {
  return TheBuildersInfos.find((s) => s.id === builderId)!;
};

// Format the names ["Alice", "Bob", "Carol"] => Alice, Bob, and Carol
export const formatBuildersNames = (names: string[]): string[] => {
  if (names.length === 1) {
    return names;
  } else {
    return names.map((name, index) =>
      index === names.length - 1 ? `${name}` : `${name}, `
    );
  }
};
