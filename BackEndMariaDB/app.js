const dbFunctions = require('./database');
const express = require('express');
const path = require('path');
const multer = require('multer');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors({ origin: '*' }));

/*
// configure multer middleware
const upload = multer({
    storage: multer.memoryStorage(), // store the file in memory
    limits: {
        fileSize: 10 * 1024 * 1024, // limit file size to 10MB
    }
});
*/

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, 'imgs/'); // specify the directory where you want to save the file
    },
    filename: function(req, file, cb) {
      cb(null, file.originalname); // use the original file name as the new file name
    }
  });
  
const upload = multer({ storage: storage });
  

app.post('/api/touren/skitouren/', upload.single('image'), (req, res) => {
    const imagename = req.file.filename;
    
    const { bergname, berghoehe, datum, personen, beschreibung } = req.body; // get the name and description from the JSON
    const data = { bergname, berghoehe, datum, personen, beschreibung, imagename}; // create the JSON object
    
    dbFunctions.insertSkitour(data);
    res.send(data);
}); 

app.post('/uploadImage', upload.single('image'), (req, res) => {
    console.log("upload" + req.file);
    res.send('File uploaded successfully!');
});


app.get('/api/touren/skitouren', (req, res) => {
    dbFunctions.getSkitouren().then((product) => {
        res.send(product);
     })
})

app.get('/api/touren/skitouren/:id', (req, res) => {
    dbFunctions.getSkitour(req.params.id).then((product) => {
        res.send(product[0]);
    })
})


app.get('/api/images/:imagename', (req, res) => {
    const imageName = req.params.imagename;
    const imagePath = path.join(__dirname, 'imgs', imageName);
  
    res.sendFile(imagePath);
});
  


const port = process.env.PORT || 8090; 
app.listen(port, () => console.log(`Listining on PORT ${port}...`));

