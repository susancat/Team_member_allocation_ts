import '../styles/globals.css'
import { SSRProvider } from 'react-bootstrap'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  
  return(
    <SSRProvider>
      <Layout>
        <Component 
          {...pageProps} 
        />
      </Layout>
    </SSRProvider>
  ) 
}

export default MyApp