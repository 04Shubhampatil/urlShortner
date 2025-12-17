
import express from 'express'
import 'dotenv/config'
import dbConnection from './utils/dbConfig.js';
import userRouts from './routes/urlRouter.js'

const app = express()
const port = process.env.PORT || 55000;

dbConnection(process.env.MONGODB_URL).then(() => {
    console.log("DB connected");

}).catch(() => console.log("DB connection faild")
)
app.use(express.json());

//^ routes
app.use('/url',userRouts)


app.listen(port, () => {
    console.log(`server running on ${port} `);
})