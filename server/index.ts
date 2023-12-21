import express from 'express'
import urlRouter from './routes/url'
const app= express();
import dotenv from 'dotenv'
 dotenv.config()
 const port= process.env.PORT
 import { mongooseConnect } from './connection/connect';
 import cookieParser from 'cookie-parser'
 app.use(cookieParser())
app.use(express.json())
mongooseConnect()

app.use('/url', urlRouter)



app.get('/', (req,res)=> {
     res.send('Connected Successfully baby!')
})

app.listen(port, ()=> console.log(`Server is listening on port ${port}`)
)


