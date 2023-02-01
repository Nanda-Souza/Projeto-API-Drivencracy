import { choiceCollection } from '../config/database.js';
import { pollCollection } from '../config/database.js';

export const createChoice = (async (req, res) => {
    const { title, pollId } = req.body;    

    
    res.status(201).send("bombou!");
  
}
    )