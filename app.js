'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
var SwaggerUi = require('swagger-tools/middleware/swagger-ui');
module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  app.use(SwaggerUi(swaggerExpress.runner.swagger))

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Zubair');
  
});
