const debug = require("debug")("bff:router");
const ThemeDetection = {

    themeName: (request, response, next) => {

        console.log('session --->', request.session)
        const host = request.headers.host;
        debug('themeName -->', host)
        next()
    }
}
module.exports = ThemeDetection