import '@testing-library/jest-dom'
import { server } from './test-utils/server'

jest.mock('next/router', () => {
  return {
    __esModule: true,
    ...jest.requireActual<Record<string, unknown>>('next/router'),
    default: {}
  }
})

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
