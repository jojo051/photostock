require('dotenv').config();
const https = require('https');
const express = require('express');
const app = express();
const cors = require('cors');
const fileupload = require("express-fileupload");
const fs = require('fs');

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};
app.use(cors());
app.use(fileupload());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Welcome to Express");
});

//lecture image et text
app.use(express.static('public'));
app.use('/images', express.static('images'));

//path
//const images = require('./routes/images.js');
const coments = require('./routes/coments.js');
const api = require('./routes/api.js');
const uploaddufichier = require('./routes/uploaddufichier.js');
const uploaddufichiers = require('./routes/uploaddufichiers.js');

//app.use ('/images', images);
app.use ('/coments', coments);
app.use ('/api', api);
app.use ('/uploaddufichier', uploaddufichier);
app.use ('/uploaddufichiers', uploaddufichiers);


const server = https.createServer(options, app).listen(process.env.PORT, function(){
  console.log(`Server is listening on ${process.env.PORT}`)
});
/* app.listen(process.env.PORT, (err) => {
    if (err) {
      throw new Error('Something bad happened...');
    }
    console.log(`Server is listening on ${process.env.PORT}`);
  });
 */
