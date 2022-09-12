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
  } )
  //res.status(200).send("coucou");
})

router.delete("/:id",(req,res)=>{
  const idImages = []
  idImages.push(req.params.id) ;
  console.log(req.params.id.length >1, idImages,req.params.id );
  const test = [1,2,3]
  if (req.params.id.length > 1) {
    db.query(`DELETE FROM path_image Where id in (${test})`, err=>{
      if(err){
        res.status(500).send(JSON.stringify(`Erreur lors de la suppression d'une images`));
        console.log("multi1",err);
      } else {
        res.status(200).send(JSON.stringify("supression efectuer"));
        console.log("multi2");
      }
    })
  } else {
    try {
      idImages.forEach(
      id => {
        console.log("id",id);
        db.query('DELETE FROM path_image Where id = ?', (id), err=>{
          if(err){
            res.status(500).write(JSON.stringify(`Erreur lors de la suppression d'une images`));
            console.log("solo1",err);
          } else {
            res.status(200).send(JSON.stringify("supression efectuer"));
            //res.status(204).write(JSON.stringify("supression efectuer"));
            console.log("solo2");
          }
        })
      }
      ) 
    } catch (error) {
    console.log("3",error);
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