const Repository = require('../models/Repository');


//add a repository to favorites
exports.AddFavorites= async(req,res)=>{

    const {name}=req.body;

    try {
        let repo = await Repository.findOne({ name });

        if(repo) {
            return res.status(400).json({ msg: 'Repository already exists' });
        }
        repo = new Repository(req.body);

        // save repositoy
        await repo.save();

        res.status(200).send('Repositorio creado correctamente')

    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error')
    }
}

//remove a repository to favorites
exports.RemoveFavorites= async(req,res)=>{

    const {name}=req.query;

    try {
        let repo = await Repository.findOne({ name });

        if(!repo) {
            return res.status(400).json({ msg: 'Repository not exists' });
        }
        repo = new Repository(req.body);
        
        //Remove
        await Repository.findOneAndRemove({name});

        res.status(200).send('Repository Remove')

    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error')
    }
}

//get favorites
exports.getFavorites= async(req,res)=>{


  const {userId}=req.body

  try {
    const repos = await Repository.find({ userId })
    res.json({ repos });
      
  } catch (error) {
    res.status(400).send('Hubo un error')
  }
}