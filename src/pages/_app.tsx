import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head"
import usePageView from '../hooks/usePageView'
import GoogleAnalytics from '../components/GoogleAnalytics'

export default function App({ Component, pageProps }: AppProps) {
  usePageView();
  return (
    <>
      <Head>
        <title>こーひーあーる</title>
        <meta name="description" content="ポートフォリオ | Web&Game開発者こーひーあーる" />
			</Head>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  );
}
