import { PROJECT_ID } from './Project.type';

export enum BUILDER_ID {
  DANIEL_MARIN = 'Daniel Marin',
  ERFAN_ROSTAMI = 'Erfan Rostami',
  JAN_DAMM = 'Jan Damm',
  JAN_RUTTINGER = 'Jan Ruttinger',
  JONGWON_PARK = 'Jongwon Park',
  JOYCE_JIANG = 'Joyce Jiang',
  KAILI_WANG = 'Kaili Wang',
  MICHAEL_DAIGLER = 'Michael Daigler',
  SANTIAGO_HERNANDEZ = 'Santiago Hernandez',
  SARA_ABDALI = 'Sara Abdali',
  VARUN_SHENOY = 'Varun Shenoy',
  WENITTE_APIOU = 'Wenitte Apiou',
  YUMA_TANAKA = 'Yuma Tanaka',
}

export interface MentorInfo {
  profileImageURL: string;
  name: string;
  company: string;
  bio: string;
  twitterHandle: string;
}

export interface SpeakerInfo {
  name: string;
  company: string;
  lectureTitle: string;
  description: string;
  profileImageURL: string;
  companyImageURL: string;
  year: number;
  twitterHandle: string;
}

export interface BuilderInfo {
  id: BUILDER_ID;
  profileImageUrl: string;
  twitterHandle: string;
  projectId?: PROJECT_ID;
}
