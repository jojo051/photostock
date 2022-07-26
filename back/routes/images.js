const express = require('express');
const router = express.Router();
const fs = require('node:fs');
const url = require("url");
const path = require("path");

router.get("/", (req, res) => {
  fs.readdir(`./public/images/`, function(err, files) {
    if (err) {
      console.log("err0",err);
    }else{
      console.log("0",files.length);
      if (files === null || JSON.stringify(files) === JSON.stringify([])) {
        res.send('error')
      } else {
        files.map((file)=>{
          file = "public/images/"+file
          console.log(file);
          fs.readFile(`./${file}`,(err,content)=>{
            if (err) {
              console.log(err);
            } else {
              console.log(content);
              res.end(content)
            }
          })

        })
      }
      //res.send('gg');
    }
  });
}); 

module.exports = router;



    //res.sendFile("./public/images/troll.png",{ root: '.' });