import dayjs from 'dayjs'
import { ObjectId } from 'mongodb';
import { choiceCollection } from '../config/database.js';
import { pollCollection } from '../config/database.js';
import { voteCollection } from '../config/database.js';


export const createChoice = (async (req, res) => {
    const { title, pollId } = req.body;    
    
    
    try {

        const existingPool = await pollCollection.findOne({_id: ObjectId(pollId)})

        if (!existingPool){
            return res.status(404).send("Enquete inválida!")
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
            pollId: ObjectId(pollId)})
        
        res.status(201).send("Opção cadastrada com sucesso!");    
    } catch (err) {
        res.status(500).send(err);
      }
    
  
}
    )


    export const getChoices = (async (req, res) => {        
        const id = req.params.id;

        try {

            const existingPool = await pollCollection.findOne({_id: ObjectId(id)})
    
            if (!existingPool){
                return res.status(404).send("Enquete inválida!")           
            
            }

            const pollChoices = await choiceCollection.find({ pollId: ObjectId(id) }).toArray() 
            
    
            res.status(200).send(pollChoices)            
        } catch (err) {
            res.status(500).send(err);
        }
    }
     
)

export const voteChoice = (async (req, res) => {        
    const id = req.params.id;

    try {

        const existingChoice = await choiceCollection.findOne({_id: ObjectId(id)})

        if (!existingChoice){
            return res.status(404).send("Opção inválida!")           
        
        }
        
        const poll = await pollCollection.findOne({_id: ObjectId(existingChoice.pollId)})
        
        if (dayjs().isAfter(poll.expireAt)){
            return res.status(403).send("Enquete não expirada!")

        }
        
        
        await voteCollection.insertOne(
            {choiceId: ObjectId(id),
             createdAt: dayjs().format("YYYY-MM-DD HH:mm")})
        
        

        res.status(201).send("Voto registrado com sucesso!")            
    } catch (err) {
        res.status(500).send(err);
    }
}
 
)