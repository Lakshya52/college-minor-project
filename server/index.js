const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const port = 5000;

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://0.0.0.0:27017/fineTrack").then(() => console.log("Connected to MongoDB")).catch((err) => console.error("MongoDB connection error:", err));

app.get('/', (req, res) => {
    res.send('This is the server');
});

app.listen(port, () => {
    console.log("Server is listening");
});
