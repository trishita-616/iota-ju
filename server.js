const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the root directory
app.use(express.static(__dirname));

// Route for the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'HOME/homepage-of-iota-main/home.html'));
});

// Route for other pages
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'ABOUT US/about us.html'));
});

app.get('/events', (req, res) => {
    res.sendFile(path.join(__dirname, 'EVENTS (2)/views/events.html'));
});

app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, 'PROJECTS/projects.html'));
});

app.get('/team', (req, res) => {
    res.sendFile(path.join(__dirname, 'TEAM/team.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
