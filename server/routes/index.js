const router = require('express').Router()
const themeMiddleware = require('../middleware/themeDetection') 

router.use(themeMiddleware.themeName)
module.exports = router

