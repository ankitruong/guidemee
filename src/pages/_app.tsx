import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import { config } from '@fortawesome/fontawesome-svg-core'
import type { AppProps } from 'next/app'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { TranslateProvider } from '../contexts/translate';

config.autoAddCss = false

export default function App({ Component, pageProps }: AppProps) {
  
  return <TranslateProvider>
    <Component {...pageProps} />
  </TranslateProvider>
}
