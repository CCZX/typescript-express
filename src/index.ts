import express, { Express } from 'express'

// npm install @types/express --save

const app: Express = express()

const main:Function = ():void => {
  app.listen(6060, () => {
    console.log('ts-express 6060')
  })
}

main()
 