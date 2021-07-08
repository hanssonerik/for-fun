import { rest } from 'msw'

import { PIC_URL } from 'config'
import { mockedImageResponse } from '__mocks__/mocks'

const handlers = [
  rest.get(PIC_URL, (_req, res, ctx) => {
    return res(ctx.json(mockedImageResponse))
  })
]

export { handlers }
