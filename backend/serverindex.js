const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse incoming JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from your HTML project directory (e.g., 'public')
app.use(express.static('.'));

// Handle search requests
app.post('/search', (req, res) => {
    const query = req.body.query;
    // For example, process the search (connect to DB, etc.)
    // For now, just echo the search query
    res.json({ results: [`You searched for: ${query}`] });
});

// Handle apply form submissions (you'd create a form in frontend)
app.post('/apply', (req, res) => {
    const applicantData = req.body;
    // Save applicantData to your database (not shown here)
    // Respond with confirmation
    res.json({ message: 'Application received!', data: applicantData });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
