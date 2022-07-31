const router = require('express').Router()
const AppController = require('../controller/AppController')
router.get('/health', AppController.health)

module.exports = router;