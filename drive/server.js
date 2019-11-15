const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
import multer from 'multer';
app.use(express.json());
app.use (express.urlencoded({extended:false}));
const port = 3000 || process.env.PORT, ip = process.env.IP;
import axios from 'axios';

const scopes = 'https://www.googleapis.com/auth/drive';

const OAuth2Client = new google.auth.OAuth2(
  process.env.client_id,
  process.env.client_secret,
  process.env.redirect_uris
);

OAuth2Client.setCredentials({
  access_token : process.env.access_token,
  refresh_token : process.env.refresh_token,
  expiry_date : true,
  scopes:scopes
})

const drive = google.drive({
  version: 'v3',
  auth : OAuth2Client
});

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
   
let upload = multer({storage}).single('file');
app.set('view engine', 'ejs')
app.use(express.static(__dirname +'/public'))

app.get('/', (req, res)=> {
    res.status(200).json({message: 'Welcome to test app'});
})

app.get('/files/new', (req, res)=> {
    res.status(200).render('new');
})

app.post('/files',  (req, res)=> {
    drive.files.create({
    requestBody: {
      name: 'Test',
      mimeType: 'text/plain'
    },
    media: {
      mimeType: 'text/plain',
      body: 'Hello World I am the first successful upload by boye'
    },
    scope: scopes
  })
  .then(response=> {
    console.log(response)
  })
  .catch(err=>console.log(err.message))
    // const file = fs.readFile('ml-run-data-individual.csv', (err, data)=> {
    //     err? console.log(err) : console.log(data)
    // })
    // console.log(req.body, file);
    // console.log(req.body.file);
    // axios ({
    //     method : 'POST',
    //     url: 'https://www.googleapis.com/upload/drive/v3/files?uploadType=media',
    //     data: file,
    // })
    // .then(res=> console.log(res))
    // .catch(err=>console.log(err.message))
    res.status(200).json({message: 'We got the file'})
})

app.listen(port, () => {
    console.log(`drive trial app running on port ${port}, and ip ${ip}`)
})