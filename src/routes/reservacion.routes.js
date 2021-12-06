module.exports = app => {
    const boletareservacion = require("../controllers/reservacion.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Usuario ...
    router.post("/register", boletareservacion.create);
    
    app.use('/api/reservacion', router);
  };