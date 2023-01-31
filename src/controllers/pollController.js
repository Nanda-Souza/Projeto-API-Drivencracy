import dayjs from 'dayjs'


export const createPool = (async (req, res) => {
    const { title, expireAt } = req.body;

    res.status(201).send("Enquete criada!")
  
    
  })