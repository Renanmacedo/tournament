const debug = require("debug")("tournament:router:themeDetection");
const ThemeDetection = {

    detectionApplication: (request, response, next) => {
        const host = request.headers.host;
        debug('themeName -->', host)
        request.store = { applicationName: host}
        next()
    }
}
module.exports = ThemeDetection