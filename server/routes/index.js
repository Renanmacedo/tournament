const router = require("express").Router();
const ThemeDetection = require('../middleware/themeDetection')

router.use(ThemeDetection.themeName)

module.exports = router;