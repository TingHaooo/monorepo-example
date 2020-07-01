import express from 'express'
import redis from 'redis'
import session from 'express-session'
import connectRedis from 'connect-redis'
import cors from 'cors'

const app = express();

const server = () => {
  const client = redis.createClient({
    // host: 'redis'
  })

  const RedisStore = connectRedis(session)
  app.use(cors())
  app.use(
    session({
      store: new RedisStore({ client }),
      name: '123',
      secret: '123',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 7 * 86400 * 1000,
        secure: false
      }
    })
  )

  app.get('*', (req, res) => {
    res.json({
      test: 'Hello World~~'
    })
  })

  app.listen(4000, () => {
    console.log('Server now listen to host 4000~~~~')
  })
}

server()
