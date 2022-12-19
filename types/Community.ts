import { BUILDER_ID, PROJECT_ID } from 'data/Ids';

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
