const express = require('express');
const router = express.Router();
const fs = require('node:fs');
const Buffer = require ('node:buffer');

router.get("/", (req, res) => {
    res.send("Welcome to uploads");
    console.log("coucou");
  }); 
//includes("image/jpeg")||i.mimetype.includes("image/jeg")||i.mimetype.includes("image/pnj") 
router.post("/",(req,res)=>{
  //traitement des datas
  const dataForm = req.files.files.filter((file=> (file.mimetype.includes("image/jpeg")||file.mimetype.includes("image/png")) && (file.size >10 && file.size <100000000)))
    if (dataForm == null ||
        dataForm === '' ||
        JSON.stringify(dataForm) === JSON.stringify([])|| 
        JSON.stringify(dataForm) === JSON.stringify({})){
      console.log("ok1");
      res.status(400).send("Les données sont mal renseigné");
      }else{
        dataForm.forEach(datas => {
          const buffer = datas.data
          const name = datas.name
          console.log(buffer,name);
          fs.writeFile(`./public/images/${name}`,buffer,(err)=>{
            if (err) {
              console.log("err1",err);
            } else {
              console.log("gg");
            } 
          })
        });
      console.log("ok2");
  }
  
  //enregitrer les datas
  //metre en BDD
  console.log("end");
})





/* router.post('/', upload.single('mesfichiers'), function (req, res, next) {
  console.log(req.file);
  //traitement des donné fitre les type ou se que l'on veut
  //const data = req.file.filter(i => i.mimetype.includes("image/jpeg") || i.mimetype.includes("image/png"));
  const data = req.file.filter(i => i.size < 10000)
  console.log(data);
if(JSON.stringify(data) === JSON.stringify([]) || (data == null)) {
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

