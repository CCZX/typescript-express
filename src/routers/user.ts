import { NextFunction, Request, Response, Router } from 'express'
import UserController from './../controller/user'

const userController: UserController = new UserController()
const router: Router = Router()

router.get('/all', userController.all)

export default router
