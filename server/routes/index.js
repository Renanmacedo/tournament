const debug = require("debug")("bff:router");
const router = require("express").Router();


router.use((request, response, next) => {
    response.setHeader('Cache-Control', 'no-cache, no-store');
    debug("router")
    next();
});

router.use("/config", require("./config"));
module.exports = router;

