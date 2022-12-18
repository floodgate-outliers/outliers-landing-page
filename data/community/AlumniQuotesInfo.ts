import { BUILDER_ID } from 'data/Ids';

export interface AlumniQuote {
  builderId: BUILDER_ID;
  date: string;
  quote: string;
}

export const AlumniQuotesInfo: AlumniQuote[] = [
  // {
  //   builderId: BUILDER_ID.SANTIAGO_HERNANDEZ,
  //   date: 'July 15, 2021',
  //   quote:
  //     'I found people here that turned into great friends; people to start the next breakthrough company with, to chat about some niche new technology, or just to go on a hike and talk about life.',
  // },
  {
    builderId: BUILDER_ID.KAILI_WANG,
    date: 'July 28, 2021',
    quote:
      'The community and mentorship of Outliers impacted my life in two major ways: 1) relationships with bright, wonderful minds that’ll last for decades to come, and 2) self-realization of what I want in life: using my strengths to make real impact and pursuing a life full of learning + building.',
  },
  {
    builderId: BUILDER_ID.MICHAEL_DAIGLER,
    date: 'Aug 03, 2021',
    quote:
      'Outliers made me more confident in taking a carrer path that might be different for the norm for people my age. I play into my strengths now regardless of what others think.',
  },
  {
    builderId: BUILDER_ID.WENITTE_APIOU,
    date: 'August 01, 2022',
    quote:
      'Outliers fast forwarded my entire understanding of the crypto space. It’s one thing to learn about technologies by reading about them online and another thing to learn about them directly from the creators of said technologies. Truly shifted my mental paradigm on blockchain technology and its applications.',
  },
  {
    builderId: BUILDER_ID.VARUN_SHENOY,
    date: 'August 05, 2022',
    quote:
      'Outliers has been a magical program that pushed me to think deeply about my potential as a builder. The Floodgate team has a unique way of aligning young builders from different perspectives to work on the most stimulating and pressing problems that are out there. The structure of the program was invaluable: no other fellowship involves picking a single topic (crypto), forming a close community around it (Outliers), and diving as deep as possible in its technical nuances.',
  },
  {
    builderId: BUILDER_ID.JAN_RUTTINGER,
    date: 'August 07, 2022',
    quote:
      'The Outliers program by the Floodgate team has been a life-changing experience for me. I came in expecting to learn what paradigms will change with the emergence of web3 and how building a company in that space is different. I left with much more - a new group of friends I am still collaborating with to this day.',
  },
  {
    builderId: BUILDER_ID.YUMA_TANAKA,
    date: 'Aug 10, 2021',
    quote:
      'Simply put, I’ve never been part of a program where the organizing team cared so deeply about each individual. They did an incredible job creating a cohort of world-class, humble builders who Im now delighted to be able to call my friends. The Outliers program has given me the confidence to continue to explore and build in crypto for the next 20 years.',
  },
];
