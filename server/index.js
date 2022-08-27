const {app, server} = require('./app');
const {Nuxt, Builder}  = require('nuxt');
const config = require('../nuxt.config');
const morgan = require('morgan');
const { response } = require('express');

const nuxt = new Nuxt(config);
const builder = new Builder(nuxt);

app.use(morgan('dev'));
/*app.get('/', function(req, res) {
  res.json('hello')
});*/


builder.build()
  .then(() => {
  // Рендерить каждый маршрут с Nuxt.js
    app.use(nuxt.render)
    // Запустить сервер
    server.listen(3005, ()=>{
       console.log('Server run in 3005 port');
    });
  });