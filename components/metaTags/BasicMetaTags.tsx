import Head from 'next/head';
import { FC } from 'react';

type BasicMetaTagsProps = {
  title: string;
  route: `/${string}`;
};

export const BasicMetaTags: FC<BasicMetaTagsProps> = ({ title, route }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta
        name="description"
        content="The community for exceptional young builders in crypto by Floodgate x Standard Crypto"
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={process.env.NEXT_PUBLIC_ORIGIN! + route}
      />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content="The community for exceptional young builders in crypto by Floodgate x Standard Crypto"
      />
      <meta
        property="og:image"
        content={`${process.env.NEXT_PUBLIC_ORIGIN!}/OutliersCover.png`}
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content={process.env.NEXT_PUBLIC_ORIGIN! + route}
      />
      <meta property="twitter:title" content={title} />
      <meta
        property="twitter:description"
        content="The community for exceptional young builders in crypto by Floodgate x Standard Crypto"
      />
      <meta
        property="twitter:image"
        content={`${process.env.NEXT_PUBLIC_ORIGIN!}/OutliersCover.png`}
      />
    </Head>
  );
};
