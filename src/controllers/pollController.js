export const createPool = (async (req, res) => {
    const { title } = req.body;

    res.status(200).send("Enquete criada!")
  
    
  })