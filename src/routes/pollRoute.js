import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { pollSchema } from "../schemas/pollSchema.js";
import { createPoll,
         listPolls,
         pollResult } from "../controllers/pollController.js";


const pollRoute = Router()

pollRoute.post("/poll", validateSchema(pollSchema), createPoll)

pollRoute.get("/get-polls", listPolls )

pollRoute.get("/poll/:id/result", pollResult)

export default pollRoute
