import userEvent from '@testing-library/user-event'
import { screen, waitFor } from '@testing-library/react'
import { getPage } from 'next-page-tester'
import nextRouter from 'next/router'

it('navigates to random picture page and back', async () => {
  const { render } = await getPage({
    route: '/',
    router: (router) => Object.assign(nextRouter, router)
  })

  render()

  const homeHeader = screen.getByText('Learning new stuff is fun...')
  const homeParagraph = screen.getByText(
    /Next thing I want to add is some styling/
  )
  const randomPictureLink = screen.getByText('link')

  expect(homeHeader).toBeInTheDocument()
  expect(homeParagraph).toBeInTheDocument()
  expect(randomPictureLink).toBeInTheDocument()

  expect(nextRouter.asPath).toBe('/')
  userEvent.click(randomPictureLink)

  await waitFor(() => expect(nextRouter.asPath).toBe('/random-picture'))
  const randomPictureHeader = screen.getByText('Random picture please!')
  const randomPictureParagraph = screen.getByText(
    /If you don't like it you can always go/
  )
  const homeLink = screen.getByText('home')

  expect(randomPictureHeader).toBeInTheDocument()
  expect(randomPictureParagraph).toBeInTheDocument()
  expect(homeLink).toBeInTheDocument()

  userEvent.click(homeLink)

  await waitFor(() => expect(nextRouter.asPath).toBe('/'))
  const homeHeaderAgain = screen.getByText('Learning new stuff is fun...')

  expect(homeHeaderAgain).toBeInTheDocument()
})
