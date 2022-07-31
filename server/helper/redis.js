const { createClient } = require('redis')
const sessionExpress = require('express-session')
const RedisStore = require('connect-redis')(sessionExpress)

const TWO_MINUTS = 120000;

const client = createClient({ legacyMode: true, host: 'localhost', port: 6379   })

client.connect().catch(err => console.log('error: ', err))
const session = new RedisStore({ client: client })

module.exports = { session, TWO_MINUTS }