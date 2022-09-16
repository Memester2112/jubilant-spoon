const express = require('express');
const path = require('path');
const app = express();

const { products } = require('./data.js');

app.get('/', (req, res) => {
    res.send('<h1>Home page</h1><a href="/api/products">Products</a>');
});

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image };
    });
    res.json(newProducts);
});

app.get('/api/products/:productID', (req, res) => {
    const product = products.find((p) => p.id === Number(req.params["productID"]));
    if (!product) {
        return res.status(404).send('Product DNE');
    }
    res.json(product);
});

app.get('/api/v1/query', (req, res) => {
    console.log(req.query);
    const { search, limit } = req.query;
    let sortedProducts = [...products];
    if (search) {
        sortedProducts = sortedProducts.filter((pro) => {
            return pro.name.startsWith(search);
        });
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }
    if (sortedProducts.length < 1) {
        return res.status(200).json({success:true, data:[]});
    }
    res.status(200).json(sortedProducts);
    res.send('Hi!');
});

app.listen(5000, () => {
    console.log("Server is listening...");
});

