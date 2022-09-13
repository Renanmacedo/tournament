import { Request, Response, NextFunction } from 'express'
const ThemeDetection = {

    detectionApplication: (request: Request, response: Response, next: NextFunction) => {
        const host = request.headers.host;
        request.app.locals = { applicationName: host}
        next()
    }
}
export default ThemeDetection