import { FC, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { FAQs } from 'data/FAQs';

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
              <p className="text-2xl font-bold tablet:text-xl">{question}</p>

              <motion.div
                variants={answerVariants}
                initial="hidden"
                animate={showAnswerIndex === index ? 'show' : 'hidden'}
                className="overflow-hidden"
              >
                <p className="text-xl">{answer}</p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
