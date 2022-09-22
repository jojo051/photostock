const express = require("express");
const router = express.Router();
const fs = require("node:fs");
const db = require("../database/db");

router.get("/", (req, res) => {
  db.query('SELECT * FROM image',(err, results)=>{
    if (err) {
      res.status(500).send('Erreur lors de la récupération des image');
    } else {
      const buf = results[0].blob.toString('base64'); 
      console.log("ok");
      res.status(200).json(buf);
    }
  })
});

router.post("/", (req, res) => {
  console.log("post",req.files.files);
  const blob = req.files.files.data
  const name = req.files.files.name
  const size = req.files.files.size
  const type = req.files.files.mimetype
  const formData = {name,size,type,blob}
  console.log(formData);
  db.query("INSERT INTO image SET ?", formData, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la sauvegarde des images");
    } else {
      res.status(200).json(formData);
    }
  })
});
module.exports = router;


/* let dataForm = req.files.files
  if(dataForm.length == null){
    let data = []
    data.push(dataForm)
    dataForm = data
    console.log("test",dataForm);
  }
  dataForm = dataForm.filter((file) =>(file.mimetype.includes('image/jpeg') || file.mimetype.includes('image/png')) && file.size > 10 && file.size < 100000000)
  if (dataForm == null ||dataForm === "" ||dataForm.length === 0) {
    res.status(400).send("Les données sont mal renseigné");
    console.log("test2",dataForm);
    } else {(dataForm.filter((file) =>(file.mimetype.includes('image/jpeg') || file.mimetype.includes('image/png')) && file.size > 10 && file.size < 100000000))
    dataForm.forEach((datas) => {
      const buffer = datas.data;
      const name = datas.name;
      const date = new Date(Date.now()).toJSON();
      //console.log("buffer", name, date);
      fs.writeFile(`./public/images/${name}`, buffer, (err) => {
        if (err) {
          console.log("err1", err);
        } else {
          //metre en BDD : name,date
          const formData = { name, date };
          db.query("INSERT INTO path_image SET ?", formData, (err, results) => {
            if (err) {
              console.log(err);
              res.status(500).write(JSON.stringify("Erreur lors de la sauvegarde des images"));
            } else {
              res.status(200).write(JSON.stringify({ ...dataForm }));
            }
            res.send();
          });
        }
      });
    });
  } */