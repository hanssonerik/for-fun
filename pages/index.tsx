import React, { ReactElement } from 'react'
import Head from 'next/head'
import Link from 'next/link'

const Home = (): ReactElement => {
  return (
    <>
      <Head>
        <title>This is just for fun</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Learning new stuff is fun...</h1>
        <p>
          Next thing I want to add is some styling, and maybe a new page with
          some other fun stuff. I&apos;ll add a{' '}
          <Link href="/random-picture">link</Link>, just in case.
        </p>
      </div>
    </>
  )
}

Home.whyDidYouRender = true

export default Home
