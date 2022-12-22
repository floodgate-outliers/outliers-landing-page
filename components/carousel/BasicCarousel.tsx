import { FC, ReactElement, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ScrollContainer from 'react-indiana-drag-scroll';

type BasicCarouselProps = {
  id: string;
  carouselElements: ReactElement[];
};

export const BasicCarousel: FC<BasicCarouselProps> = ({
  id,
  carouselElements,
}) => {
  return (
    <ScrollContainer horizontal className="!overflow-x-auto py-5">
      <div id={id} className="flex w-fit flex-row gap-x-10 px-width-clamp">
        {carouselElements.map((e) => (
          <div key={e.key}>{e}</div>
        ))}
      </div>
    </ScrollContainer>
  );
};
