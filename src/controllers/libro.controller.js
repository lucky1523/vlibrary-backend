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

// Find a collection of books with a parameter of search
exports.findSome = (req, res) => {
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

// Delete a book with the specified id in the request
exports.delete = (req, res) => {
  Libro.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Tutorial with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Tutorial with id " + req.params.id
        });
      }
    } else res.send({ message: `Tutorial was deleted successfully!` });
  });
};

