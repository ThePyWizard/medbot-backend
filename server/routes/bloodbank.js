import express from 'express'
import Insertblookbank from '../controllers/bloodbank/insert.js'
import Fetchbloodbank from '../controllers/bloodbank/fetch.js'
const router = express.Router()

router.post('/bloodbank', Insertblookbank)
router.get('/bloodbank', Fetchbloodbank)

export default router