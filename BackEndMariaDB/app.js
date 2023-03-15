const dbFunctions = require('./database');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors({ origin: '*' }));


app.get('/', (req,res) => {
    res.status(200).json({title: 'hello world'});
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

app.put('/api/touren/skitouren/', (req, res) => {
    dbFunctions.insertSkitour(req.body);
    res.send(req.body);
})


const port = process.env.PORT || 8090; 
app.listen(port, () => console.log(`Listining on PORT ${port}...`));

