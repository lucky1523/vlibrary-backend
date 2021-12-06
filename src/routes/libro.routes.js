module.exports = app => {
    const books = require("../controllers/libro.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Book ...
    router.post("/", books.create);
  
    // Retrieve all Books
    router.get("/findAll", books.findAll);
  
    // Retrieve a collection of books
    router.post("/findSelection", books.findSome);
  
    // Delete a Book with id
    router.delete("/:id", books.delete);
    
    app.use('/api/books', router);
  };