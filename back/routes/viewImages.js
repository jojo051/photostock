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
  const idImages = req.params.id;
  console.log(idImages);
  db.query(`DELETE FROM path_image Where id in (${idImages})`, err=>{
    if(err){
      res.status(500).send(JSON.stringify(`Erreur lors de la suppression d'une images`));
      console.log("1",err);
    } else {
      res.status(200).send(JSON.stringify("supression efectuer"));
      console.log("2");
    }
  })
})
module.exports = router;

/* try {
  idImages.forEach(
  id => {
    console.log(id);
    db.query('DELETE FROM path_image Where id = ?', (id), err=>{
      if(err){
        res.status(500).write(JSON.stringify(`Erreur lors de la suppression d'une images`));
        console.log("1",err);
      } else {
        res.status(200).write(JSON.stringify({ ...dataForm }));
        console.log("2");
      }
    })
  }
) 
} catch (error) {
  console.log("3",error);

} */