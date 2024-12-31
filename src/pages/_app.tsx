import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>食享 TasteJoy</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
