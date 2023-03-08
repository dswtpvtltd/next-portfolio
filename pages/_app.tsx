import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/index.scss';
import AppNavBar from '@/components/shared/NavBar';
import Footer from '@/components/shared/Footer';
import Hero from '@/components/shared/Hero';
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <div className="portfolio-app">
      <AppNavBar />
      {pageProps.appData}
      {Component.name === "Home" && <Hero/>}
      <div className='container'>
        <Component {...pageProps} />
      </div>
      <Footer/>
    </div>
  </>
}
