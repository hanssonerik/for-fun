import { ReactElement } from 'react'
import Head from 'next/head'
import Link from 'next/link'

const RandomPicture = (): ReactElement => {
  return (
    <>
      <Head>
        <title>A random picture - just for fun</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Random picture please!</h1>
        <p>
          {`If you don't like it you can always go`} <Link href="/">home</Link>,
          just in case.
        </p>
      </div>
    </>
  )
}

export default RandomPicture
