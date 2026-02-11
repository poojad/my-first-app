import cors from "cors";
import express from "express";
import { mongoose } from 'mongoose';

// import { MongoClient } from 'mongodb'

// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);
// const dbName = 'myProject';

// import bodyParser from "bodyParser";
// const express = require('express');

// const MONGODB_CONNECT_URI = "mongodb://localhost:27017/website"
// const MONGODB_CONNECT_URI = "mongodb+srv://poojad:pooja@11@cluster0.6gs48ad.mongodb.net/website?appName=Cluster0";
// const MONGODB_CONNECT_URI = "mongodb+srv://poojad:hero1@astroo.xp7fjtg.mongodb.net/Astro?retryWrites=true&w=majority";

const MONGODB_CONNECT_URI = "mongodb+srv://poojad:hero1@astroo.xp7fjtg.mongodb.net/Astro";
// maybe the password should not be @

const app = express();

const connectDB = () => {
    console.log("db sucessful")

    mongoose.connect(MONGODB_CONNECT_URI)
        .then(() => console.log("MongoDB Connected"))
        .catch((err) => console.log("err"));

    // try {
    //     mongoose.connect(MONGODB_CONNECT_URI)
    //     console.log("db sucessful")
    // } catch (err) {
    //     console.log("db error")
    //     console.log(err.message)
    // }
}

connectDB();

const PeopleSchema = new mongoose.Schema({
    name: String
})

// const PeopleModel = mongoose.model("peoples", PeopleSchema)
const PeopleModel = mongoose.model("users", PeopleSchema)

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
// app.use(cors())

// Simple GET route
app.get('/', (req, res) => {
    res.send('Hello, this is my API!');
});

// const users = [
//     { id: 1, name: 'Pooja' },
//     { id: 2, name: 'Rohit' },
//     { id: 3, name: 'Pankaj' },
//     { id: 4, name: 'Harry' },
//     { id: 5, name: 'Amyra' },
//     { id: 6, name: 'Ankita' },
// ];


// // GET API to return data
app.get('/users', (req, res) => {
    // res.json(users)

    PeopleModel.find({}).then((d) => {
        res.json(d)
    }).catch((err) => { console.log(err) })
});

// // POST API to receive data - ex: req will be an object {name: 'pooja'}
app.post('/users', async (req, res) => {
    const newUser = req.body.name;
    await PeopleModel.create({ name: newUser }).then(d => {
        res.send("User inserted successfully");
    }).catch(err => {
        res.status(500).send("Error inserting user");
    })

    // try {
    //     // we can save also
    //     const u = await PeopleModel.create({ name: newUser })
    //     console.log(u);
    //     console.log("user-----")

    //     
    // } catch (error) {
    //     console.log(error);
    //     res.status(500).send("Error inserting user");
    // }
    // users.push({ id: users.length + 1, name: newUser })

});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

