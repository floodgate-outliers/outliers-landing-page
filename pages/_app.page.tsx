import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { MediaQueryContextProvider } from 'contexts/MediaQueryContext';
import { BasicNavbar } from 'components/navbars/BasicNavbar';
import { BasicFooter } from 'components/footers/BasicFooter';
import { motion, Variants } from 'framer-motion';

const ComponentVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MediaQueryContextProvider>
      <BasicNavbar />
      <motion.div
        variants={ComponentVariants}
        initial="hidden"
        animate="visible"
      >
        <Component {...pageProps} />
      </motion.div>
      <BasicFooter />
    </MediaQueryContextProvider>
  );
}
