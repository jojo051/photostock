require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const fileupload = require("express-fileupload");

app.use(cors());
app.use(fileupload());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to Express");
});

//lecture image et text
app.get("/images",(req, res) => {
  res.sendFile("./public/images/troll.png",{ root: '.' });
}); 

app.get("/static",(req, res) => {
  res.sendFile("./public/images/baseDeDonneTest.txt",{ root: '.' });
}); 

//path
const coments = require('./routes/coments.js');
const api = require('./routes/api.js');
const uploaddufichier = require('./routes/uploaddufichier.js');
const uploaddufichiers = require('./routes/uploaddufichiers.js');

app.use ('/coments', coments);
app.use ('/api', api);
app.use ('/uploaddufichier', uploaddufichier);
app.use ('/uploaddufichiers', uploaddufichiers);

app.listen(process.env.PORT, (err) => {
    if (err) {
      throw new Error('Something bad happened...');
    }
    console.log(`Server is listening on ${process.env.PORT}`);
  });