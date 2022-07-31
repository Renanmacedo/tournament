const session = require('express-session')
const redis = require('../helper/redis')
const SessionMiddleware  =  {
    createSession: session({
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
        store: redis.session
    }),
    checkSession: (req, res,next) => {

        if(req.session.cookie) {
            req.session.cookie.domain = 'tournament.local'
        }
        next()
    } 
}

module.exports = SessionMiddleware