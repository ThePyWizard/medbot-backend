import express from 'express'
import Insertmarketplace from '../controllers/marketplace/index.js'
import Fetchmarketplace from '../controllers/marketplace/fetch.js'
const router = express.Router()

router.post('/doctors', Insertmarketplace)
router.get('/doctors', Fetchmarketplace)

export default router