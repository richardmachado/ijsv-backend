const server = require("./server.js");
const express = require('express')
const path = require('path')

const PORT = process.env.PORT || 3301;
server
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on Port: ${PORT}`))