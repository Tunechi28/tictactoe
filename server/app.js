const express = require('express');
const createErrors = require('http-errors');


module.exports = (config) => {
    const app = express();

    // body parser middlewares
    app.use(express.urlencoded({extended : true}));
    app.use(express.json())

    
     // catch 404 and forward to error handler
  app.use((req, res, next) => {
    next(createError(404));
  });

  if (app.get('env') === 'development') {
    app.locals.pretty = true;
  }

  // error handler

  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    res.locals.message = err.message;
    const status = err.status || 500; // If no status is provided, let's assume it's a 500
    res.locals.status = status;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(status);
    console.log(err);
    res.json({ error: err.toString() });
  });

  return app;
}