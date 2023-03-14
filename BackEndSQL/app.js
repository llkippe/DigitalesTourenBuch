// const dbFunctions = require('./dbFunctions');
const express = require('express');
const app = express();

app.get('/api/waslos', (req, res) => {
    
    res.send("halo");
})

// app.use(express.json());

// app.get('/api/touren/skitouren', (req, res) => {
//     dbFunctions.getSkitouren().then((product) => {
//         res.send(product[0]);
//      })
// })

// app.get('/api/touren/skitouren/:id', (req, res) => {
//     dbFunctions.getSkitour(req.params.id).then((product) => {
//         res.send(product[0]);
//     })
// })

// app.put('/api/touren/skitouren/', (req, res) => {
//     const skitour = {
//         Id: req.body.Id,
//         Bergname: req.body.Bergname,
//         Berghoehe: req.body.Berghoehe,
//         Datum: req.body.Datum,
//         Personen: req.body.Personen,
//         Beschreibung: req.body.Beschreibung
//     } 
//     dbFunctions.insertSkitour(skitour);
//     res.send(skitour);
// })



const port = process.env.PORT || 8090; 
app.listen(port, () => console.log(`Listining on PORT ${port}...`));

