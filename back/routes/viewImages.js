const express = require("express");
const router = express.Router();
const db = require("../database/db");

router.get("/",(req, res)=>{
  db.query('SELECT * FROM path_image',(err, results)=>{
    if (err) {
      res.status(500).send('Erreur lors de la récupération des image');
    } else {
      res.status(200).json(results);
    }
  })
})

router.delete("/:id",(req,res)=>{
  const idImages = []
  idImages.push(req.params.id) ;
  console.log(req.params.id.length >1, idImages,req.params.id );
  if (req.params.id.length > 1) {
    db.query(`DELETE FROM path_image Where id in (${idImages})`, err=>{
      if(err){
        res.status(500).send(JSON.stringify(`Erreur lors de la suppression d'une images`));
        //console.log("multiErr",err);
      } else {
        res.status(200).send(JSON.stringify("supression effectuer"));
        //console.log("multiOK");
      }
    })
  } else {
    try {
      idImages.forEach(
        id => {
          db.query('DELETE FROM path_image Where id = ?', (id), err=>{
            if(err){
              res.status(500).write(JSON.stringify(`Erreur lors de la suppression d'une images`));
              //console.log("soloErr",err);
            } else {
              res.status(200).send(JSON.stringify("supression effectuer"));
              //console.log("soloOk");
            }
          })
        }
      ) 
    } catch (error) {
    console.log("err",error);
    }
  }
})
module.exports = router;

/* db.query(`DELETE FROM path_image Where id in (${idImages})`, err=>{
  if(err){
    res.status(500).send(JSON.stringify(`Erreur lors de la suppression d'une images`));
    console.log("1",err);
  } else {
    res.status(200).send(JSON.stringify("supression efectuer"));
    console.log("2");
  }
}) */