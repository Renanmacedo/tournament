import { Request, Response, NextFunction } from 'express'
const AppController = { 
    health(request: Request,response: Response,next: NextFunction) {
        response.json({
            status: 'ok',
            pid: process.pid,
            host: request.get('host'),
            headersHost: request.headers.host,
            userAgent: request.headers['user-agent'],
            hostname: request.hostname,
            version: process.version,
            uptime: process.uptime(),
            env: process.env.NODE_ENV,
            memory: process.memoryUsage(),
        })
    }
}
export default AppController