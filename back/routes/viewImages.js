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
module.exports = router;