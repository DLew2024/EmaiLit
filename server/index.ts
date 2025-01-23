// common JS modules on server side
const express = require('express');
const app = express();

// Route handler
/*
  app - Express 'app' to register this route to handler with
  get - Watch for incoming requests with this method.. GET POST PUT DELETE PATCH
  app.get - Is the Route handler
  / - Watch for request trying to access '/'
  req - Object representing the incoming request
  res - Object representing the outgoing response
  res.send - Send some JSON back to whoever made this request
*/
app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});


// Express telling Node to listen for requests on port 4000
app.listen(4000);

// http://localhost:4000/
