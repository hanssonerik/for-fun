import React, { useState } from 'react'
import { ReactElement } from 'react'
import Head from 'next/head'
import { View } from './Home.View'

const Home = (): ReactElement => {
  const [state, setState] = useState({})

  return (
    <>
      <Head>
        <title>Awesome Next.js template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <View message={'...(not really)'} />
      <a onClick={() => setState({ hej: 'hej' })}>test</a>
    </>
  )
}

Home.whyDidYouRender = true

export { Home }
