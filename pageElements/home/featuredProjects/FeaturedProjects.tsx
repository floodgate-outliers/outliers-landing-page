import { FC, ReactElement, useEffect, useState } from 'react';
import { FeaturedProjectCard } from './FeaturedProjectCard';
import { motion, Variants } from 'framer-motion';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Mousewheel } from 'swiper';

import Link from 'next/link';
import { useMediaQueryContext } from 'contexts/MediaQueryContext';
import { ProjectInfo } from 'types/Project.type';
import { getProjectInfoById } from 'data/projects/SummerProjects';
import { FeaturedProjectIds } from 'data/Ids';
import { BasicCarousel } from 'components/carousel/BasicCarousel';
import { RightChevronLink } from 'components/buttons/RightChevronLink';

const FeaturedProjectsInfo: ProjectInfo[] = FeaturedProjectIds.map((p) =>
  getProjectInfoById(p)
);

const SeeMoreVariants: Variants = {
  initial: {
    color: 'var(--off-black)',
    x: 0,
  },
  hover: {
    color: 'var(--floodgate)',
    x: 10,
    textDecoration: 'underline',
  },
};

export const FeaturedProjects: FC = () => {
  const { isDesktop, isLaptop, isTablet, isMobile } = useMediaQueryContext();

  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    if (isMobile) {
      setSlidesPerView(1.15);
    } else if (isTablet) {
      setSlidesPerView(1.15);
    } else if (isLaptop) {
      setSlidesPerView(1.2);
    } else if (isDesktop) {
      setSlidesPerView(1.35);
    } else {
      setSlidesPerView(1.55);
    }
  }, [isDesktop, isLaptop, isTablet, isMobile]);

  const FeaturedProjectComponents: ReactElement[] = FeaturedProjectsInfo.map(
    (projectInfo) => (
      <FeaturedProjectCard key={projectInfo.id} {...projectInfo} />
    )
  );

  return (
    <div>
      <h2 className="title-header px-width-clamp">Featured Projects</h2>
      <div>
        <BasicCarousel
          id="featured-project-carousel"
          carouselElements={[
            ...FeaturedProjectComponents,
            <div className="flex h-full flex-row items-center pr-10">
              <RightChevronLink link="/projects" text="See More" />
            </div>,
          ]}
        />
        {/* <Swiper
          className="!overflow-visible"
          slidesPerView={slidesPerView}
          modules={[Mousewheel]}
          mousewheel={{
            forceToAxis: true,
          }}
        >
          {FeaturedProjectsInfo.map((projectInfo, index) => (
            <SwiperSlide key={index}>
              <FeaturedProjectCard key={index} {...projectInfo} />
            </SwiperSlide>
          ))}
          <SwiperSlide className="my-auto">
            <div className="flex h-full w-fit cursor-pointer flex-col justify-center text-3xl font-bold tablet:ml-20">
              <Link href="/projects">
                <motion.div
                  variants={SeeMoreVariants}
                  initial="initial"
                  whileHover="hover"
                  className="mt-10 flex w-fit cursor-pointer flex-row whitespace-pre text-3xl"
                >
                  <p className="text-inherit">See More </p>
                  <p className="text-inherit">&#707;</p>
                </motion.div>
              </Link>
            </div>
          </SwiperSlide>
        </Swiper> */}
      </div>
    </div>
  );
};
