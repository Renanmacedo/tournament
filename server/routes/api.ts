import express from 'express'

const router = express.Router()

router.get('/config', (request, response, next) => {
    response.json({ status: 200, message: 'ok' })
})
export default router