const express = require('express');
const router = express.Router();

const fs = require('fs');

router.get("/", (req, res) => {
    res.send("Welcome to upload");
  }); 

/* router.post('/', upload.single('monfichier'), function (req, res, next) {
  console.log(req);
fs.rename(req.file.path, 'public/images/' + req.file.originalname, function(err){
    if (err) {
    res.send('problème durant le déplacement');
    } else {
    res.send('Fichier uploadé avec succès');
    }
    });
}) */

//multiple envoie
/* router.post('/', upload.array('monfichier',5), function (req, res, next) {

  fs.rename(req.files.path, 'public/images/' + req.files.originalname, function(err){
      if (err) {
      res.send('problème durant le déplacement');
      } else {
      res.send('Fichier uploadé avec succès');
      }
      });
  }) */

module.exports = router;