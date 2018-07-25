const express = require('express');
const helmet = require('helmet');
const path = require('path');
const process = require('process');

// Express server
const app = express();

const PORT = process.env.PORT || 3000;
const DIST_FOLDER = path.join(process.cwd(), 'dist', 'sugar');

// Security
app.use(helmet());

// Server static files
app.get('*.*', express.static(DIST_FOLDER));

// Enable HTML5 routing
app.get('*', (req, res) => {
  res.sendFile(path.join(DIST_FOLDER, 'index.html'));
});

// Start up the Node server
app.listen(PORT);
