import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import { urlencoded } from 'body-parser';
import cors from 'cors'
import router from './routes/router'

const app = express();
dotenv.config();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cookieParser())
app.use(urlencoded({extended: true}));
app.use(cors({origin:'*'}));

app.use('/api',router());



app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})