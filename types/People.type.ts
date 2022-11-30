import { PROJECT_ID } from './Project.type';

export enum STUDENT_ID {
  JOYCE_JIANG = 'Joyce Jiang',
  SANTIAGO_HERNANDEZ = 'Santiago Hernandez',
  KAILI_WANG = 'Kaili Wang',
  MICHAEL_DAIGLER = 'Michael Daigler',
  WENITTE_APIOU = 'Wenitte Apiou',
  VARUN_SHENOY = 'Varun Shenoy',
  JAN_RUTTINGER = 'Jan Ruttinger',
  YUMA_TANAKA = 'Yuma Tanaka',
}

export interface MentorInfo {
  profileImageURL: string;
  colorProfileImageURL: string;
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

export interface StudentInfo {
  id: STUDENT_ID;
  profileImageUrl: string;
  twitterHandle: string;
  projectId?: PROJECT_ID;
}
