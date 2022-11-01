import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type PageLink = {
  text: string;
  href: string;
};

const pageLinks: PageLink[] = [
  {
    text: 'TEAM',
    href: '/team',
  },
  {
    text: 'FAQ',
    href: '/faq',
  },
  {
    text: 'CONTACT',
    href: '/contact',
  },
];

export const BasicNavbar: FC = () => {
  return (
    <div className="sticky left-0 right-0 top-0 z-10 flex flex-row items-center justify-between border-b-2 bg-off-white px-width-clamp py-5">
      <Link href="/">
        <div className="flex flex-row items-center gap-x-5">
          <div className="relative h-12 w-12 rounded-full tablet:h-16 tablet:w-16">
            <Image priority fill src="/OutliersLogo.png" alt="Outliers" />
          </div>
          <p className="text-2xl font-bold">OUTLIERS</p>
        </div>
      </Link>
      <div className="ml-10 flex flex-row gap-x-7">
        {pageLinks.map(({ text, href }) => {
          return (
            <Link href={href} key={href}>
              <p className="text-2xl">{text}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
