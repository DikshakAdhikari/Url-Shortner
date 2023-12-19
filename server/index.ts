import express from 'express'
const app= express();
import dotenv from 'dotenv'
 dotenv.config()
 const port= process.env.PORT
 import { mongooseConnect } from './connection/connect';

app.use(express.json())
mongooseConnect()

app.get('/', (req,res)=> {
     res.send('Connected Successfully baby!')
})

app.listen(port, ()=> console.log(`Server is listening on port ${port}`)
)


