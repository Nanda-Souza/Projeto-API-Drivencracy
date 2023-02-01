import dayjs from 'dayjs'
import { ObjectId } from 'mongodb';
import { choiceCollection } from '../config/database.js';
import { pollCollection } from '../config/database.js';


export const createChoice = (async (req, res) => {
    const { title, pollId } = req.body;    
    
    
    try {

        const existingPool = await pollCollection.findOne({_id: ObjectId(pollId)})

        if (!existingPool){
            return res.status(404).send("Enquete invalida!")
        }

        if (dayjs().isAfter(existingPool.expireAt)){
            return res.status(403).send("Enquete expirada!")

        }

        const existingTitle = await choiceCollection.findOne({title})

        if (existingTitle){
            return res.status(409).send("Opção já cadastrada!")
        }

        
        
        await choiceCollection.insertOne(
            {title,
            pollId})
        
        res.status(201).send("Opção cadastrada com sucesso!");    
    } catch (err) {
        res.status(500).send(err);
      }
    
  
}
    )