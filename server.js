const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();
const port = process.env.PORT || 3001;

// Enable compression for all responses
app.use(compression());

// Set cache control headers for static files
const staticOptions = {
  maxAge: '1y',
  etag: true,
  lastModified: true,
  setHeaders: (res, path) => {
    if (path.endsWith('.html')) {
      res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
    }
  }
};

// Serve static files from the root directory
app.use(express.static(__dirname, {
  ...staticOptions,
  dotfiles: 'ignore',
  index: false
}));

// Add cache headers for common static files
app.use((req, res, next) => {
  // Cache static assets for 1 year
  if (req.url.match(/\.(css|js|jpg|jpeg|png|gif|ico|svg|woff|woff2|ttf|eot|webp)$/)) {
    res.setHeader('Cache-Control', 'public, max-age=31536000');
  }
  next();
});

// Route for the home page - redirect to events
app.get('/', (req, res) => {
  res.redirect('/events');
});

// Keep the original home page accessible at /home
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'HOME/homepage-of-iota-main/home.html'));
});

// Route for the events page
app.get('/events', (req, res) => {
  res.sendFile(path.join(__dirname, 'EVENTS (2)/views/events.html'));
});

// Route for about page
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'ABOUT US/about us.html'));
});

// Route for team page
app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, 'PROJECTS/projects.html'));
});

app.get('/team', (req, res) => {
    res.sendFile(path.join(__dirname, 'TEAM/team.html'));
});

// Route for Innovatia page
app.get('/innovatia', (req, res) => {
    res.sendFile(path.join(__dirname, 'EVENTS (2)/views/innovatia.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
