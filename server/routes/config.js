const router = require('express').Router()

router.get('/config', (request,response,next) => {
    const config = {
        store: request.store || {},
        session: request.session || {}
    }
    response.json(config)
    next()
})
module.exports = router