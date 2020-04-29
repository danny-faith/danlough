// import App from 'next/app'
import { ThemeProvider } from 'emotion-theming'
import Context from '../Context'
import { Global } from '@emotion/core'
import Head from 'next/head'
import Layout from '../components/Layout'
import global from '../globalStyles'
import appState from '../appState'
import theme from '../theme'

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <Global styles={global} />
            <Head>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            </Head>
            <Context.Provider value={appState}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Context.Provider>
        </ThemeProvider>
    )
  }

  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // MyApp.getInitialProps = async (appContext) => {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  export default MyApp
