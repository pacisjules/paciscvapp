import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout.js'
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();


  if(router.pathname === '/') {
    return <Component {...pageProps} />;
  }else{
    return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
  }

}

export default MyApp
