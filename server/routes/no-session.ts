import express from 'express'

const router = express.Router()
import AppController from '../controller/AppController'
router.get('/health', AppController.health)

export default router;