var http = require('http');
var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var productData = require('./products.json');
var cors = require('cors');


var app = express();
app.use(cors());


//GET method for fetching data..
var expressServer = app.get('/rest/api/get', (req, res) => {
    res.send(productData);
});


//POST method for adding data..
app.use(bodyParser.json());
var expressServer = app.post('/rest/api/post', (req, res) => {
    console.log(req.body);
    productData.push(req.body);
    fs.writeFileSync('products.json', JSON.stringify(productData));
});


//PUT method for updating or editing data..
var expressServer = app.put('/rest/api/update/:id', (req, res) => {
    var id = req.params.id;
    for (var product of productData) {
        if (product.id == id) {
            product.id = req.body.id;
            product.Name = req.body.Name;
            product.Description = req.body.Description;
            product.Price = req.body.Price;
            res.send(productData);
            console.log(product);
        }
    }
    fs.writeFileSync('products.json', JSON.stringify(productData));
});


//DELETE method for deleting data..
var expressServer = app.delete('/rest/api/delete/:id', (req, res) => {
    var id = req.params.id;
    for (var counter = 0; counter < productData.length; counter++) {
        if (productData[counter].id == id) {
            productData.splice(counter, 1);
            console.log(productData);
            res.send(productData);
        }
    }
    fs.writeFileSync('products.json', JSON.stringify(productData));
});


//Running the application on port 4010..
expressServer.listen(4010, () => console.log('Running on port 4010..'));