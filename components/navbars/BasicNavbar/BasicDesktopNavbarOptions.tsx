import { motion, Variants } from "framer-motion";
import { BasicButton } from "components/buttons/BasicButton";
import { FC } from "react";
import Link from "next/link";
import { PageLink } from "types/Navbar.type";

const LinkVariants: Variants = {
  initial: {
    y: 0,
    color: "var(--off-black)",
  },
  hover: {
    y: -3,
    color: "var(--floodgate)",
  },
};

type BasicDesktopNavbarOptionsProps = {
  pageLinks: PageLink[];
};

// Navbar options for desktop
// All of the options are laid out, no hamburger menu
export const BasicDesktopNavbarOptions: FC<BasicDesktopNavbarOptionsProps> = ({
  pageLinks,
}) => {
  return (
    <div className="ml-10 flex flex-row items-center gap-x-10 tablet:gap-x-5">
      {pageLinks.map(({ text, link }) => {
        return (
          <Link href={link} key={link}>
            <motion.p
              variants={LinkVariants}
              initial="initial"
              whileHover="hover"
              className="cursor-pointer text-xl font-bold"
            >
              {text}
            </motion.p>
          </Link>
        );
      })}
      {/* TODO'24: Uncomment to allow for applying */}
      {/* <a
        href={process.env.NEXT_PUBLIC_APPLICATION_LINK}
        target="_blank"
        rel="noreferrer"
      >
        <BasicButton type="button" color="blue">
          <p className="-my-1 -mx-2 text-off-white">Apply</p>
        </BasicButton>
      </a> */}
    </div>
  );
};
