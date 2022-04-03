const debug = require("debug")("bff:router");
const router = require("express").Router();

router.get("/", (request, response) => {
    response.status(200).json({ name: 'Jhon'});
})
module.exports = router;