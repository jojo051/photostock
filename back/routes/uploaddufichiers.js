const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'tmp/' });
const fs = require('fs');

router.get("/", (req, res) => {
    res.send("Welcome to uploads");
  }); 
  
/* router.post('/', upload.single('monfichier'), function (req, res, next) {
fs.rename(req.file.path, 'public/images/' + req.file.originalname, function(err){
    if (err) {
    res.send('problème durant le déplacement');
    } else {
    res.send('Fichier uploadé avec succès');
    }
    });
}) */

//multiple envoie
router.post('/', upload.array('mesfichiers'), function (req, res) {
  for (let index = 0; index < req.files.length; index++) {
    const element = req.files[index];
    fs.rename(element.path, 'public/images'+ element.originalname, function(err){
      if (err) {
      res.send('problème durant le déplacement');
      } else {
      res.send("Fichiers uploadé avec succès https://localhost:3000/");
      }
    });
  }
})

module.exports = router;