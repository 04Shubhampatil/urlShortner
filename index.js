
import express, { urlencoded } from 'express'
import 'dotenv/config'
import dbConnection from './utils/dbConfig.js';
import cookieParser from 'cookie-parser';
import urlRouts from './routes/urlRouter.js'
import userRouts from './routes/userRouter.js'
import {restricLogedInUserOnly} from './middleware/isAuthentication.js'
const app = express()
const port = process.env.PORT || 55000;

app.use(express.json());
app.use(urlencoded())
app.use(cookieParser())
dbConnection(process.env.MONGODB_URL).then(() => {
    console.log("DB connected");

}).catch(() => console.log("DB connection faild")
)

app.get('/', (req, res) => {
    res.redirect('https://chatgpt.com/');
  
});

//^ routes
app.use('/api/url',restricLogedInUserOnly,urlRouts)
app.use('/api/user',userRouts)


app.listen(port, () => { 
    console.log(`server running on ${port} `);
})