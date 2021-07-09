import React, { ReactElement, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styled, {
  DefaultTheme,
  ThemeProvider,
  createGlobalStyle
} from 'styled-components'

const Home = (): ReactElement => {
  const [theme, setTheme] = useState(lightTheme)
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Background>
        <Head>
          <title>This is just for fun</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Wrapper>
          <Box>
            <Title>Learning new stuff is fun...</Title>
            <p>
              Next thing I want to add is some styling, and maybe a new page
              with some other fun stuff. I&apos;ll add a{' '}
              <StyledLink href="/random-picture">link</StyledLink>, just in
              case.
            </p>
          </Box>
          <BoxVariant>
            <Title>Learning about old stuff is also fun...</Title>
            <p>I hope this gets good case.</p>
          </BoxVariant>
          <ErrorBox>
            <Title>Warning, boring is not so fun</Title>
            <p>I hope this gets good case.</p>
          </ErrorBox>
        </Wrapper>
      </Background>
    </ThemeProvider>
  )
}

const Global = createGlobalStyle`
   body { padding: 0;
    margin: 0;
    }
`
const Background = styled.div`
  background: ${(props) => props.theme.palette.background.main};
  padding: 1em;
  height: 100vh;
`
const Wrapper = styled.div`
  background: ${(props) => props.theme.palette.surface.main};
  padding: 1em;
`
const Box = styled.div`
  background: ${(props) => props.theme.palette.secondary.main};
  color: ${(props) => props.theme.palette.secondary.contrastText};
  padding: 1em;
`
const BoxVariant = styled.div`
  background: ${(props) => props.theme.palette.primary.main};
  color: ${(props) => props.theme.palette.primary.contrastText};
  padding: 1em;
`
const ErrorBox = styled.div`
  background: ${(props) => props.theme.palette.error.main};
  color: ${(props) => props.theme.palette.primary.contrastText};
  padding: 1em;
`

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.palette.error.contrastText};
  background: ${(props) => props.theme.palette.secondary.contrastText};
`

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

const Title = styled.h1`
  font-size: 1.5em;
`
Home.whyDidYouRender = true

export default Home
