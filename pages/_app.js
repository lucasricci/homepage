import '@/styles/globals.css'
import App from 'next/app'
import Head from 'next/head'
import Layout from '/components/Layout';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Layout>
        <Head>
          <title>Lucas Ricci</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    )
  }
}