const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const Registration = require('./Registration');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/dsu_admissions")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log("MongoDB Error:", err));



// API route to handle registration
app.post('/register', async (req, res) => {
    try {
        const newRegistration = new Registration(req.body);
        await newRegistration.save();
        res.json({ success: true, message: "Registration saved!" });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});


// Start server
app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
