import dayjs from 'dayjs'


export const createPool = (async (req, res) => {
    const { title } = req.body;
    let { expireAt } = req.body;

    if (expireAt === ""){        
        expireAt = dayjs().add(30, 'day').format("YYYY-MM-DD HH:mm")
    }

    const newPoll = {
        title,
        expireAt
    }

    res.status(201).send(newPoll)
  
    
  })