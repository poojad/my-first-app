const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());
// app.use(cors())

// Simple GET route
// app.get('/', (req, res) => {
//     res.send('Hello, this is my API!');
// });

// GET API to return data
app.get('/users', (req, res) => {
    const users = [
        { id: 1, name: 'Pooja' },
        { id: 2, name: 'Rohit' },
        { id: 2, name: 'Pankaj' },
        { id: 2, name: 'Harry' },
        { id: 2, name: 'Amyra' },
        { id: 2, name: 'Ankita' },
    ];
    res.json(users);
});

// POST API to receive data
app.post('/users', (req, res) => {
    const newUser = req.body;
    res.json({
        message: 'User received successfully',
        user: newUser
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

