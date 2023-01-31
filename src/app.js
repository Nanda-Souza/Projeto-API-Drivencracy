import express from "express";
import cors from "cors"
import { MongoClient } from "mongodb";
import dotenv from 'dotenv'
//import joi from 'joi'

dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI)
let db;

try{
    await mongoClient.connect()
    db = mongoClient.db()
    console.log("Database connected successfully!") 
  } catch (error) {
    console.log("Database connection error!")
  }


const server = express()

server.use(cors())
server.use(express.json());



server.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.PORT);
});