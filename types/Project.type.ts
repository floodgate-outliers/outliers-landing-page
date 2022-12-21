import { BUILDER_ID, PROJECT_ID } from 'data/Ids';
import { ReactElement } from 'react';

export enum PROJECT_TYPE {
  SUMMER = 'summer',
  HACK = 'hack',
  STARTUP = 'startup',
}

export interface ProjectInfo {
  id: PROJECT_ID;
  projectType: PROJECT_TYPE;
  projectName: string;
  builders: BUILDER_ID[];
  oneLiner: string;
  description: string;
  coverImage: string;
  mainImage: string;
  projectLink?: string;
}
