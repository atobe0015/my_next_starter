import '@/styles/global.scss'

import React from 'react'
import { RecoilRoot } from 'recoil'

import { DefaultLayout } from '@/components/Layouts/Wrapper/Default'
import ReactQueryClient from '@/lib/ReactQuery'

import Head from 'next/head'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const { title } = pageProps
  const { NEXT_PUBLIC_APP_TITLE: BaseTitle } = process.env

  return (
    <RecoilRoot>
      <ReactQueryClient>
        <LayoutComponent>
          <Head>
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="ja_JP" />
            <meta
              name="description"
              content="デフォルト説明文"
            />
            <title>
              {title} | {BaseTitle}
            </title>
          </Head>
          <Component {...pageProps} />
        </LayoutComponent>
      </ReactQueryClient>
    </RecoilRoot>
  )
}

const LayoutComponent = ({ children }) => {
  return <DefaultLayout>{children}</DefaultLayout>
}

export default App
