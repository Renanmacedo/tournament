const debug = require("debug")("bff:router");
const ThemeDetection = {

    themeName: (request, response, next) => {
        const path = request.path;
        request.themeName = path
        debug('themeName', path)
        next()
    }
}
module.exports = ThemeDetection