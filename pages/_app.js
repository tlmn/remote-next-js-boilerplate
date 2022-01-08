import React from 'react'
import Head from 'next/head'
import '../styles/globals.css'
import PropTypes from 'prop-types'

const App = ({ Component, pageProps }) =>
  <>
    <Head>

    </Head>
    <Component {...pageProps} />
  </>

export default App

App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any
}
