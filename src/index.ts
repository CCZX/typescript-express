import express, { Express, Request, Response } from 'express'
import UserRouter from './routers/user'
import middleware from './middleware'

const app: Express = express()

const main:Function = ():void => {
  middleware(app)
  app.get('/', (req: Request, res: Response) => {
    return res.send('hello')
  })
  app.use('/user', UserRouter)
  app.listen(6060, () => {
    console.log('ts-express 6060')
  })
}

main()
 