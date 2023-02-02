import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { choiceSchema } from "../schemas/choiceSchema.js"
import { createChoice,
         getChoices } from "../controllers/choiceController.js"

const choiceRoute = Router()

choiceRoute.post("/choice", validateSchema(choiceSchema), createChoice)

choiceRoute.get("/poll/:id/choice", getChoices)

export default choiceRoute