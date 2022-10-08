import { Router } from "express"
import userController from "../controllers/userController"
import authMiddleware from "../middlewares/auth-middleware"
import middlewareValidationForm from "../middlewares/middleware-validationForm"

const userRouter = Router()

userRouter.post('/registration', middlewareValidationForm, userController.registration)
userRouter.post('/login', middlewareValidationForm, userController.login)
userRouter.post('/logout', userController.logout)
userRouter.get('/refresh', userController.refresh)
userRouter.get('/auth', authMiddleware, userController.auth)


export default userRouter