const express       = require('express');
const router        = express.Router();
const episodes      = require('../models/episodes')

// Get all episodes
router.get('/', (req,res)=>{
  episodes.find({}, (error, episodes)=>{
    res.json(episodes);
  })
});

//Get single joke by id (have to check)
router.get('/:id', (req,res)=>{
  episodes.find({_id : req.params.id }, function(error,info){
      res.send(info);
  })
});

// New Episode
router.post('/', (req,res)=>{
    episodes.create(req.body, (error, newEpisode)=>{
        res.json(newEpisode);
    });
});

// Edit episode
router.put('/:id', (req,res)=>{
    console.log("trying to edit an episode");
  episodes.findOneAndUpdate(req.params.id, req.body, { new : true }, (err,update)=>{
    res.json(update);
  })
})

// Delete episode
router.delete('/:id', (req,res)=>{
  episodes.findByIdAndRemove(req.params.id, (error, deletedEpisode)=>{
    res.json(deletedEpisode);
  })
});


module.exports = router;
