import React from 'react'
import { render, screen } from '@testing-library/react'
import { Home } from 'components/Home/Home'

describe('<Home />', () => {
  it('renders template text', () => {
    render(<Home />)

    expect(screen.getByText('Next.js template')).toBeDefined()
  })

  it('renders message', () => {
    render(<Home />)

    expect(screen.getByText(/not really/)).toBeDefined()
  })
})
