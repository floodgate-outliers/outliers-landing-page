import { FC, useEffect, useState } from 'react';
import {
  FeaturedProjectCard,
  FeaturedProjectCardProps,
} from './FeaturedProjectCard';
import { FeaturedProjectsInfo } from './FeaturedProjectsInfo';
import { motion, Variants } from 'framer-motion';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import Link from 'next/link';
import { useMediaQueryContext } from 'contexts/MediaQueryContext';

const seeMoreVariants: Variants = {
  initial: {
    x: 0,
    color: 'var(--off-black)',
  },
  hover: {
    x: 10,
    color: 'var(--floodgate)',
  },
};

export const FeaturedProjects: FC = () => {
  const { isDesktop, isLaptop, isTablet, isMobile } = useMediaQueryContext();

  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    if (isMobile) {
      setSlidesPerView(1);
    } else if (isTablet) {
      setSlidesPerView(1.15);
    } else if (isLaptop) {
      setSlidesPerView(0.98);
    } else if (isDesktop) {
      setSlidesPerView(1.1);
    } else {
      setSlidesPerView(1.27);
    }
  }, [isDesktop, isLaptop, isTablet, isMobile]);

  return (
    <div>
      <h2 className="title-header">Featured Projects</h2>
      <div>
        <Swiper
          className="!overflow-visible"
          slidesPerView={slidesPerView}
          spaceBetween={20}
        >
          {FeaturedProjectsInfo.map((projectInfo, index) => (
            <SwiperSlide key={index}>
              <FeaturedProjectCard key={index} {...projectInfo} />
            </SwiperSlide>
          ))}
          <SwiperSlide className="my-auto">
            <div className="flex h-full w-fit cursor-pointer flex-col justify-center text-3xl font-bold tablet:ml-20">
              <Link href="/projects">
                <motion.p
                  variants={seeMoreVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  See More &#707;
                </motion.p>
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
