import { FC, useState } from 'react';
import { motion, Variants } from 'framer-motion';

type FAQEntry = {
  question: string;
  answer: string;
};

const FAQs: FAQEntry[] = [
  {
    question: 'Is Outliers an internship?',
    answer:
      'No, Outliers is not an internship or a replacement for an internship. If you have a full-time summer internship, you still qualify to participate in this program.',
  },
  {
    question: 'Do I need to be technical to apply?',
    answer:
      'Yes, but we do not care where you got your technical knowledge from. In fact, we’ve found the best builders are the ones who are constantly teaching themselves and working on projects outside of classes.',
  },
  {
    question: 'Do I need to know how to code in Solidity, RUST, etc.?',
    answer:
      'Teaching you how to code on-chain will not be included in Outliers programming, so we expect that your coding/learning ability will be sufficient to allow you to participate in our building projects. To support you along the way, we will provide relevant resources and technical mentorship.',
  },
  {
    question: 'Do I need to be working on a startup to apply to Outliers?',
    answer:
      'No! Outliers is not an accelerator/incubator. While many of our members are hacking away on side projects, we are selecting students based on their technical skills and aptitude for leadership. Outliers is not intended to be a replacement for an accelerator program.',
  },
  {
    question: 'Does Outliers provide funding?',
    answer:
      'No, Outliers is a part-time program that does not provide funding beyond reimbursing costs for the fall retreat.',
  },
  {
    question: 'How long is the Outliers program?',
    answer:
      'The short answer is 10 weeks. The long answer is forever! We expect Outliers to remain in touch with each other long after the official program is over, and we also expect them to give back to the community. Future classes will be expected to continue to engage and strengthen the community even after the official program ends.',
  },
  {
    question: 'What are the 2022 program dates?',
    answer:
      'Our 10 week program will officially start on June 7th and run through August 18th. We will meet twice weekly on Tuesday and Thursday evenings.',
  },
  {
    question: 'Will Outliers teach me how to be a VC?',
    answer:
      'No, Outliers is focused on turning builders into entrepreneurial leaders. While we will cover the basics of VC, this is not a program for individuals who are interested in pursuing a career in VC.',
  },
  {
    question: 'Who runs Outliers?',
    answer:
      'Outliers is run by a group of passionate educators and crypto experts. Check out the Team page for more!',
  },
];

const answerVariants: Variants = {
  hidden: {
    opacity: 0,
    height: '0px',
    margin: '0px',
    transition: {
      duration: 0.25,
    },
  },
  show: {
    opacity: 1,
    height: 'auto',
    margin: '1.25rem 0.75rem',
    transition: {
      delay: 0.25,
    },
  },
};

export const QuestionsAnswers: FC = () => {
  const [showAnswerIndex, setShowAnswerIndex] = useState(-1);

  return (
    <div>
      <h1 className="title-header">Frequently Asked Questions</h1>
      <div className="flex flex-col border-4 border-off-black tablet:border-2">
        {FAQs.map(({ question, answer }, index) => {
          return (
            <div
              key={index}
              onClick={() =>
                setShowAnswerIndex(showAnswerIndex === index ? -1 : index)
              }
              className="cursor-pointer px-4 py-5 [&:not(:last-child)]:border-b-4 tablet:[&:not(:last-child)]:border-b-2"
            >
              <p className="text-3xl font-bold tablet:text-2xl">{question}</p>

              <motion.div
                variants={answerVariants}
                initial="hidden"
                animate={showAnswerIndex === index ? 'show' : 'hidden'}
                className="overflow-hidden"
              >
                <p className="text-2xl">{answer}</p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
