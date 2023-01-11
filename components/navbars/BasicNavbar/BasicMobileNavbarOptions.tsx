import { FC, useEffect, useState } from 'react';
import { PageLink } from 'types/Navbar.type';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';

const MobileOptionsContainerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -15,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

type BasicMobileNavbarOptionsProps = {
  pageLinks: PageLink[];
};

// Navbar options for mobile
// The options are hidden behind a hamburger menu
export const BasicMobileNavbarOptions: FC<BasicMobileNavbarOptionsProps> = ({
  pageLinks,
}) => {
  const router = useRouter();
  const [showOptions, setShowOptions] = useState(false);

  // Hide options when going to a different route
  useEffect(() => {
    setShowOptions(false);
  }, [router.pathname]);

  const MOBILE_NAVBAR_OPTIONS_DIV_ID = 'mobile-navbar-options';

  // Close the navbar options if the click is outside the navbar
  const checkClickLocation = (e: MouseEvent) => {
    const navbarOptions = document.getElementById(MOBILE_NAVBAR_OPTIONS_DIV_ID);
    if (showOptions && !navbarOptions?.contains(e.target as Node)) {
      setShowOptions(false);
    }
  };

  useEffect(() => {
    if (showOptions) {
      document.addEventListener('click', checkClickLocation);
      return () => document.removeEventListener('click', checkClickLocation);
    }
  }, [showOptions]);

  const NavbarOptions = () => {
    return (
      <motion.div
        variants={MobileOptionsContainerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="absolute right-0 top-14 flex flex-col gap-y-2 border-2 border-off-black bg-gray px-7 py-4"
      >
        {pageLinks.map(({ text, link }) => {
          return (
            <Link href={link} key={link}>
              <p className="cursor-pointer text-2xl font-bold">{text}</p>
            </Link>
          );
        })}
        <a
          href={process.env.NEXT_PUBLIC_APPLICATION_LINK}
          target="_blank"
          rel="noreferrer"
        >
          <p className="cursor-pointer text-2xl font-bold text-floodgate">
            APPLY
          </p>
        </a>
      </motion.div>
    );
  };

  return (
    <div id={MOBILE_NAVBAR_OPTIONS_DIV_ID} className="relative">
      <button className="text-5xl" onClick={() => setShowOptions(!showOptions)}>
        ☰
      </button>
      <AnimatePresence>{showOptions && NavbarOptions()}</AnimatePresence>
    </div>
  );
};
