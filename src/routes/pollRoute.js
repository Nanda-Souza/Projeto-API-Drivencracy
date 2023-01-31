import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { pollSchema } from "../schemas/pollSchema.js";
import { createPool } from "../controllers/pollController.js";


const pollRoute = Router()

pollRoute.post("/poll", validateSchema(pollSchema), createPool)

export default pollRoute

