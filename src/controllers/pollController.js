import dayjs from 'dayjs'
import { ObjectId } from 'mongodb';
import { pollCollection } from '../config/database.js';


export const createPoll = (async (req, res) => {
    const { title } = req.body;
    let { expireAt } = req.body;

    if (expireAt === ""){        
        expireAt = dayjs().add(30, 'day').format("YYYY-MM-DD HH:mm")
    }    

    try {
        await pollCollection.insertOne(
            { title,
              expireAt});

    res.status(201).send("Enquete criada com sucesso!");
  } catch (err) {
    res.status(500).send(err);
  }
}
    )

export async function listPolls (req, res) {
          

  try {   
    
    const listPolls = await pollCollection.find({ }).toArray() 
    
    return res.status(200).send(listPolls)

  } catch (error) {
  res.status(500).send(error)
  }
 }


 export const pollResult = (async (req, res) => {        
  const id = req.params.id;

  try {

   
    const existingPoll = await pollCollection.findOne({_id: ObjectId(id)})
    
    if (!existingPoll){
      return res.status(404).send("Opção inválida!")           
  
  }

      res.status(200).send("Xablau!")            
  } catch (err) {
      res.status(500).send(err);
  }
}

)