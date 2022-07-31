const AppController = { 
    health(request,response,next) {
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
module.exports = AppController