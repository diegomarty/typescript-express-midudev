import express from 'express'
import * as diaryService from '../services/diaryServices'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryService.getEntriesNonSensitive())
})

router.post('/', (_req, res) => {
  res.send('Saving a diary!')
}
)

export default router
