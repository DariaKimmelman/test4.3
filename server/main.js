const express = require('express');
const cors = require('cors');
const Catmodule = require('./module');
const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());
app.get('/catapi', (req, res) => {
    Catmodule.getAll().then(data => {
        res.send(data);
    })
})



app.get('/catapi/random', (req, res) => {
     Catmodule.getAll().then(data => {
        const index = Math.floor(Math.random() * data.length);
       const result = data[index];
       res.send(result);
     })
 
})

app.get('/catapi/:id', (req, res) => {
    Catmodule.getAll().then(data => {
        const result = data.find(ele => ele.id == req.params.id);
        res.send(result);
    })
})


app.post('/catapi', (req, res) => {
    Catmodule.addCat(req.body).then(data => {
        res.send({
            "message": data
        })
    })
})


app.delete('/catapi/:id', (req, res) => {
    Catmodule.deleteCat(req.params.id).then(data => {
        res.send(data);
    })

})

app.listen(3001);