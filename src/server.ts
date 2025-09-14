import exppress from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
import { corsConfig } from './config/cors'
import { connectDB } from './config/db'
import projectRoutes from "./routes/projectRoutes"
import authRoutes from "./routes/authRoutes"

dotenv.config()

connectDB()

const app = exppress()

app.use(cors(corsConfig))

//logging
app.use(morgan('dev'))

//ñeer datos de formularios
app.use(exppress.json())

//Routes
app.use('/api/auth', authRoutes)
app.use('/api/projects', projectRoutes)

export default app