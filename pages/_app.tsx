import 'scripts/wdyr'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { pageview } from '../lib/gtag'
import {
  DefaultTheme,
  ThemeProvider,
  createGlobalStyle
} from 'styled-components'
import { AppProps } from 'next/dist/next-server/lib/router/router'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [theme] = useState(lightTheme)

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Global />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

const lightTheme: DefaultTheme = {
  palette: {
    background: {
      main: '#2F2F2F',
      contrastText: '#000000',
      variant: '#F6F6F6'
    },
    error: { main: '#C63D3D', contrastText: '#FFFFFF', variant: '#D77575' },
    surface: {
      main: '#2F2F2F',
      contrastText: '#000000',
      variant: '#F6F6F6'
    },
    primary: { main: '#2BB3CF', contrastText: '#FFFFFF', variant: '#124D59' },
    secondary: { main: '#4B2BCF', contrastText: '#FFFFFF', variant: '#361E94' }
  }
}

const Global = createGlobalStyle`
body { 
    padding: 0;
    margin: 0;
}
`
MyApp.whyDidYouRender = true

export default MyApp
