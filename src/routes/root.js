import { Router } from 'express'

import logger from '../utils/logger'

const router = Router()

router.get('/', (req, res) => {
  logger.log.success('Calling Root')
  res.send({ msg: 'hello there my name is Aline Martinez!' })
})

export default router
