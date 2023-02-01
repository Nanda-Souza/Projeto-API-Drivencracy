import express from "express";
import cors from "cors"
import dotenv from 'dotenv'
import pollRoute from "./routes/pollRoute.js"
import choiceRoute from "./routes/choiceRoute.js"


dotenv.config();

const server = express()

server.use(cors())

server.use(express.json());

server.use([pollRoute, choiceRoute])

server.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.PORT);
});