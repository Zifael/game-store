require('dotenv').config()
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { sequelize } from './db'
import model from './models/models'
import router from './routers'
import { middlewareError } from './middlewares/middleware-error'


const PORT = process.env.PORT || 7000

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use('/', router)
app.use(middlewareError)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync() 
        app.listen(PORT, () => console.log(`Server start on port: ${PORT}`))      
    } catch (error) {
        console.log(`an eror has occurred ${error}`)
    }
}

start()