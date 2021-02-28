//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/euro-tour'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/euro-tour/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
