const Chicken = require('../models/chicken');
exports.createChicken =  (req, res, next)=>{
    delete req.body._id;
      const chicken = new Chicken({
        ...req.body
      });
      chicken.save()
      .then(()=>res.status(201).json({ message :" Objet enregistré ! "}))
      .catch(error =>res.status(400).json({ error :error}));
   }
exports.modifyChicken = (req,res,next) =>{
    Chicken.updateOne({_id: req.params.id},{...req.body,_id:req.params.id})
    .then(()=>res.status(200).json('Objet Modifié'))
    .catch(error=>res.status(400).json({error}))
  }
exports.deleteChicken = (req,res,next)=>{
    Chicken.deleteOne({_id: req.params.id})
    .then(()=>res.status(200).json({message:'Objet supprimé'}))
    .catch(error=>res.status(400).json({error}));
  };
exports.getOneChicken = (req, res, next) => {
    Chicken.findOne({ _id: req.params.id })
    .then(chicken => res.status(200).json(chicken))
    .catch(error => res.status(404).json({error}));
    
};
exports.getAllChickens = (req, res, next) => {
    Chicken.find()
    .then(chickens => res.status(200).json(chickens))
    .catch(error => res.status(400).json({error}));
};
