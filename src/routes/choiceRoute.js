import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { choiceSchema } from "../schemas/choiceSchema.js"
import { createChoice } from "../controllers/choiceController.js"

const choiceRoute = Router()

choiceRoute.post("/choice", validateSchema(choiceSchema), createChoice)

export default choiceRoute