const BoletaReservacion = require("../models/reservacion.model.js");

// Create and Save a new Book
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Book
    const breservacion = new BoletaReservacion({
      id_usuario:req.body.id_usuario,
      id_libro:req.body.id_libro,
      fecha_reservacion:req.body.fecha_reservacion,
      fecha_devolucion:req.body.fecha_devolucion,
      created : new Date(),
      updated : new Date()
    });
  
    // Save Book in the database
    BoletaReservacion.create(breservacion, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      else res.send(data);
    });
  };