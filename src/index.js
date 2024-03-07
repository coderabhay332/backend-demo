import dotenv from "dotenv"
import connectDB from "./db/index.js";
import {app} from './app.js'
dotenv.config({
    path: './.env'
})



connectDB()
.then(()=> {
    app.listen(()=>{
        console.log(process.env.PORT || 3000)
    })
})
