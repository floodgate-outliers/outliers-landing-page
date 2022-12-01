// Ids of all of the projects

import { STUDENT_ID } from './People.type';

// Note the ids also act as URL paths to the project details
export enum PROJECT_ID {
  DAEDALUS = 'daedalus',
  DATALEAP = 'dataleap',
  NEXUS = 'nexus',
  NORDLE = 'nordle',
  THUNDER_LIZARD_NFT = 'thunder_lizard_nft',
  UNFOLD = 'unfold',
}

export enum PROJECT_TYPE {
  SUMMER = 'summer',
  HACK = 'hack',
  STARTUP = 'startup',
}

export interface ProjectInfo {
  id: PROJECT_ID;
  projectType: PROJECT_TYPE;
  projectName: string;
  builders: STUDENT_ID[];
  oneLiner: string;
  description: string;
  coverImage: string;
  mainImage: string;
  projectLink?: string;
}
