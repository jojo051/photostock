const express = require('express');
const router = express.Router();


const fs = require('node:fs');

router.get("/", (req, res) => {
    res.send("Welcome to uploads");
    console.log("coucou");
  }); 

router.post("/",(req,res)=>{
  console.log("coucou post");
  console.log(req.files);
  res.send('isok')
})
/* router.post('/', upload.single('mesfichiers'), function (req, res, next) {
  console.log(req.file);
  //traitement des donné fitre les type ou se que l'on veut
  //const data = req.file.filter(i => i.mimetype.includes("image/jpeg") || i.mimetype.includes("image/png"));
  const data = req.file.filter(i => i.size < 10000)
  console.log(data);
if(JSON.stringify(data) === JSON.stringify([]) || (data === null) || (data === undefined)) {
    res.send("aucun fichier envoyer ou trop grand");
    const pathTmp = req.file.filter(i => i.size > 10000);
    fs.rm(pathTmp[0].path, function (err) {
      if (err) {
        console.log(err);
      }
    });
  } else {
    fs.rename(data[0].path, 'public/images/' + data[0].originalname, function(err) {
      if (err) {
        res.send('problème durant le déplacement');
      } else {
        res.send("Fichiers uploadé avec succès"); 
      }
    });
    //efface les fichiers non traiter qui se trouve dans ./tmp
    const pathTmp = req.file.filter(i => i.size > 10000);
    fs.rm(pathTmp[0].path, function (err) {
      if (err) {
        console.log(err);
      }
    });
  }
}); */

module.exports = router;

