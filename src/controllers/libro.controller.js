const Libro = require("../models/libro.model.js");

// Create and Save a new Book
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Book
    const book = new Libro({
      titulo: req.body.titulo,
      autor: req.body.autor,
      sinopsis: req.body.sinopsis,
      foto_url: req.body.foto_url,
      estado: req.body.state, 
      reservado: false,
      created : new Date(),
      updated : new Date()
    });
  
    // Save Book in the database
    Libro.create(book, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      else res.send(data);
    });
  };

// Retrieve all books from the database 
exports.findAll = (req, res) => {
    Libro.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      else res.send(data);
    });
  };

// Find a single Tutorial with a id
exports.findOne = (req, res) => {
  // Validate request
  
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  const consult = new Libro({
    titulo:req.body.titulo,
    autor:req.body.autor
  });
 
  
  Libro.findSome(consult, (err,data)=>{
    if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while looking for Author or Title."
        });
      else res.send(data);
      
    });
};

// Update a book identified by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};