import { useRef } from 'react';

import '../styles/globals.css';
import '../assets/common.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Navbar from '../components/Navbar';

import Loading from '@/components/Loading';

export default function App({ Component, pageProps }: AppProps) {
  const loadingRef = useRef(null);
  const startLoading = () => {
    loadingRef.current?.show();
  };
  const stopLoading = () => {
    loadingRef.current?.hide();
  };

  return (
    <>
      <Head>
        <title>食享 TasteJoy</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Loading ref={loadingRef} />
    </>
  );
}
