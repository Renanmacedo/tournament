import express from 'express'
import * as bodyParser from 'body-parser'
import { ThemeDetection } from './middleware/'
import { api, noSession } from './routes'
export class Application {
    
    public app: express.Application;

    public static bootstrp() {
        return new Application()
    }
    constructor(){
        this.app = express()
        this.app.use(noSession)
        this.middlewares()
        this.config()
    }
    public config()  {
        this.app.set('port', parseInt(`${process.env.PORT || 3000}` , 10))
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({ extended: true }))
        this.app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
            err.status = 404;
            next(err);
        });
    }

    public middlewares() {
        this.app.use(ThemeDetection.detectionApplication)
    }
    public routes() {
        this.app.use('/api', api)
    }

}