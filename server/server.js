const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));


// Load static files. Commenting out as this works inconsistently for me
// app.use(express.static(path.join(__dirname, '../client')));

// ****** LOAD HOME PAGE ********
// html
app.get('/', (req, res) => {
  console.log('Loading html');
  res.status(200).sendFile(path.resolve(__dirname, '../client/home/index.html'));
})
// css
app.get('/styles.css', (req, res) => {
  console.log('Loading css');
  res.status(200).sendFile(path.resolve(__dirname, '../client/home/styles.css'))
});
// javascript
app.get('/script.js', (req, res) => {
  console.log('Loading js');
  res.status(200).sendFile(path.resolve(__dirname, '../client/home/script.js'))
});


// ****** LOAD LOGIN PAGE ********
app.get('/login', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../client/login/index.html'))
})
// css
app.get('/login/styles.css', (req, res) => {
  console.log('Loading css');
  res.status(200).sendFile(path.resolve(__dirname, '../client/login/styles.css'))
});
// javascript
app.get('/login/script.js', (req, res) => {
  console.log('Loading js');
  res.status(200).sendFile(path.resolve(__dirname, '../client/login/script.js'))
});


// **** CATCH ALL *****
app.get('*', (req, res) => {
  res.status(404).sendFile(path.resolve(__dirname, '../client/notFound/index.html'))
})


// DEFAULT ERROR HANDLER
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Middleware error',
    status: 500,
    message: {err: 'Internal server error'}
  }

  const errToSend = {...defaultErr, ...err}
  console.log(errToSend.log);
  res.status(errToSend.status).json(errToSend.message);
})

// listen
app.listen(PORT, ()=> {
  console.log(`Server listening on port ${PORT}...`);
});

module.exports = app;