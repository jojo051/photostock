const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'tmp/' });
const fs = require('node:fs');

router.get("/", (req, res) => {
    res.send("Welcome to uploads");
  }); 
  
router.post('/', upload.array('mesfichiers'), function (req, res, next) {
  //traitement des donné fitre les type ou se que l'on veut
  //const data = req.files.filter(i => i.mimetype.includes("image/jpeg") || i.mimetype.includes("image/png"));
  const data = req.files.filter(i => i.size < 10000)
  fs.rename(data[0].path, 'public/images/' + data[0].originalname, function(err) {
    if (err) {
      res.send('problème durant le déplacement');
    } else {
      res.send("Fichiers uploadé avec succès");
    }
  });
  //efface les fichiers non traiter qui se trouve dans ./tmp
  const pathTmp = req.files.filter(i => i.size > 10000)
  fs.rm(pathTmp[0].path, function (err) {
    if (err) {
      console.log(err);
    }
  });
});
module.exports = router;