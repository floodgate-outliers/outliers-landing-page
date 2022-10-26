import Head from 'next/head';
import Image from 'next/image';
import { SplashScreen } from '../pageElements/home/SplashScreen';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <div>
        <SplashScreen />
      </div>
    </div>
  );
}
