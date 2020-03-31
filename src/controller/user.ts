import { NextFunction, Request, Response, Router } from 'express'

export default class UserController {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }
  public async all(req: Request, res: Response ,next: NextFunction): Promise<Response | void> {
    return res.send('hello user')
  }
  public routes() {
    this.router.get('/all', this.all)
  }
}
