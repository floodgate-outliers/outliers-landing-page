import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { MediaQueryContextProvider } from 'contexts/MediaQueryContext';
import { BasicNavbar } from 'components/navbars/BasicNavbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MediaQueryContextProvider>
      <BasicNavbar />
      <Component {...pageProps} />
    </MediaQueryContextProvider>
  );
}
