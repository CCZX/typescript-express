import { NextFunction, Request, Response, Router } from 'express'
import UserCollection from './../models/user'

export default class UserController {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }
  public async add() {
    UserCollection
  }
  public async all(req: Request, res: Response ,next: NextFunction): Promise<Response | void> {
    return res.send('hello user')
  }
  public async find(req: Request, res: Response, next: NextFunction) {
    const data = await UserCollection.find({account: '123'})
    return res.send(data)
  }
  public routes() {
    this.router.get('/all', this.all)
    this.router.get('/find', this.find)
  }
}
