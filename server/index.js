import cors from "cors";
import express from "express";
import { mongoose } from 'mongoose';

// import { MongoClient } from 'mongodb'

// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);
// const dbName = 'myProject';

// import bodyParser from "bodyParser";
// const express = require('express');

const app = express();
mongoose.connect('mongodb://localhost:27017/website')

const PeopleSchema = new mongoose.Schema({
    name: String
})

const PeopleModel = mongoose.model("peoples", PeopleSchema)

const port = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(
    cors({
        origin: "https://ui-7bvw.onrender.com"      //prod
        // origin: "http://localhost:3000"          //dev
    })
);

app.use(express.json());
// app.use(bodyParser.json());
// // app.use(cors())

// Simple GET route
// app.get('/', (req, res) => {
//     res.send('Hello, this is my API!');
// });

const users = [
    { id: 1, name: 'Pooja' },
    { id: 2, name: 'Rohit' },
    { id: 3, name: 'Pankaj' },
    { id: 4, name: 'Harry' },
    { id: 5, name: 'Amyra' },
    { id: 6, name: 'Ankita' },
];


// GET API to return data
app.get('/users', (req, res) => {
    // res.json(users)

    PeopleModel.find({}).then((d) => {
        res.json(d)
    }).catch((err) => { console.log(err) })
});

// POST API to receive data - ex: req will be an object {name: 'pooja'}
app.post('/users', async (req, res) => {
    const newUser = req.body.name;

    // users.push({ id: users.length + 1, name: newUser })
    try {
        const u = await PeopleModel.create({ name: newUser })
        console.log(u);
        
        res.send("User inserted successfully");
    } catch (error) {
        console.log(error);
        res.status(500).send("Error inserting user");
    }

});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

