import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { pollSchema } from "../schemas/pollSchema.js";
import { createPoll,
         listPolls } from "../controllers/pollController.js";


const pollRoute = Router()

pollRoute.post("/poll", validateSchema(pollSchema), createPoll)

pollRoute.get("/get-polls", listPolls )

export default pollRoute
