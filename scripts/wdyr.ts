import React from 'react'

if (process.env.NODE_ENV === 'development') {
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const whyDidYouRender = require('@welldone-software/why-did-you-render')

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    whyDidYouRender(React, {
      trackAllPureComponents: true
    })
  }
}
