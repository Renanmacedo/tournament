import { Request, Response, NextFunction } from 'express'
import expressSession from 'express-session'

const SessionMiddleware  =  {
    createSession: expressSession({
        cookie: {
            maxAge: 60 * 60 * 60 * 60,
            path: '/',
            httpOnly: true,
            sameSite: 'lax'
        },
        secret: 'TournamentSecret',
        name: 'tournament.sid',
        saveUninitialized: false,
        resave: false,
    }),
    checkSession: (req:Request, res: Response, next: NextFunction) => {
        if(req.session.cookie) {
            req.session.cookie.domain = 'tournament.local'
        }
        next()
    } 
}

export default SessionMiddleware