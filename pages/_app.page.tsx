import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { MediaQueryContextProvider } from 'contexts/MediaQueryContext';
import { BasicNavbar } from 'components/navbars/BasicNavbar/BasicNavbar';
import { BasicFooter } from 'components/footers/BasicFooter';
import PlausibleProvider from 'next-plausible';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain="outliers.build" trackLocalhost={true}>
      <MediaQueryContextProvider>
        <BasicNavbar />
        <div className="min-h-screen">
          <Component {...pageProps} />
        </div>
        <BasicFooter />
      </MediaQueryContextProvider>
    </PlausibleProvider>
  );
}
