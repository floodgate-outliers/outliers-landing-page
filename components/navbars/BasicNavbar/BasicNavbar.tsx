import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PageLink } from 'types/Navbar.type';
import { BasicDesktopNavbarOptions } from './BasicDesktopNavbarOptions';
import { BasicMobileNavbarOptions } from './BasicMobileNavbarOptions';

const pageLinks: PageLink[] = [
  {
    text: 'COMMUNITY',
    link: '/community',
  },
  {
    text: 'PROJECTS',
    link: '/projects',
  },
  {
    text: 'FAQ',
    link: '/faq',
  },
  {
    text: 'CONTACT',
    link: '/contact',
  },
];

export const BasicNavbar: FC = () => {
  return (
    <div className="sticky left-0 right-0 top-0 z-50 flex flex-row items-center justify-between border-b-2 bg-off-white px-width-clamp py-5">
      <Link href="/">
        <div className="flex flex-row items-center gap-x-5">
          <div className="relative h-12 w-12 rounded-full tablet:h-14 tablet:w-14">
            <Image priority fill src="/OutliersLogo.png" alt="Outliers" />
          </div>
          <p className="text-2xl font-bold">OUTLIERS</p>
        </div>
      </Link>
      <div className="tablet:hidden">
        <BasicDesktopNavbarOptions pageLinks={pageLinks} />
      </div>
      <div className="hidden tablet:block">
        <BasicMobileNavbarOptions pageLinks={pageLinks} />
      </div>
    </div>
  );
};
