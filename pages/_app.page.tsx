import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { MediaQueryContextProvider } from 'contexts/MediaQueryContext';
import { BasicNavbar } from 'components/navbars/BasicNavbar';
import { BasicFooter } from 'components/footers/BasicFooter';
import { motion, Variants } from 'framer-motion';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MediaQueryContextProvider>
      <BasicNavbar />
      <div className="min-h-screen">
        <Component {...pageProps} />
      </div>
      <BasicFooter />
    </MediaQueryContextProvider>
  );
}
