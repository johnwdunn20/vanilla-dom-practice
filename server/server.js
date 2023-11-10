const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// load html
app.get('/', (req, res) => {
  console.log('testing a first route');
  res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
})
// default error handler

// listen
app.listen(PORT, ()=> {
  console.log(`Server listening on port ${PORT}...`);
});

module.exports = app;