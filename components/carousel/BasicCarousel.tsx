import { FC, ReactElement } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';

type BasicCarouselProps = {
  carouselElements: ReactElement[];
};

export const BasicCarousel: FC<BasicCarouselProps> = ({ carouselElements }) => {
  return (
    <ScrollContainer horizontal className="!overflow-x-auto py-5">
      <div className="flex w-fit flex-row gap-x-12 px-width-clamp">
        {carouselElements.map((e) => (
          <div key={e.key}>{e}</div>
        ))}
      </div>
    </ScrollContainer>
  );
};
