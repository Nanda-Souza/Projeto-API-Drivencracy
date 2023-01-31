import dayjs from 'dayjs'
import { pollCollection } from '../config/database.js';


export const createPool = (async (req, res) => {
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