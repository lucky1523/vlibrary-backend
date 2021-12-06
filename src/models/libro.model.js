const sql = require("./db.js");

// constructor
const Libro = function(libro) {
  this.id_libro=libro.id_libro;
  this.titulo = libro.titulo;
  this.autor = libro.autor;
  this.foto_url=libro.foto_url;
  this.sinopsis=libro.sinopsis;
  this.estado=libro.estado;
  this.reservado=libro.reservado
  this.created=libro.created;
  this.updated=libro.updated;

};

Libro.create = (newLibro, result) => {
  sql.query("INSERT INTO Libro SET ?", newLibro, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created book: ", { id: res.insertId, ...newLibro });
    result(null, { id: res.insertId, ...newLibro });
  });
};

Libro.findSome = (findSelection, result) => {
  sql.query("SELECT * FROM libro WHERE titulo LIKE '%"+findSelection.titulo+"%' OR autor LIKE '%"+findSelection.autor+"%'",
  (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("error: ",res);
    result(null,res)
  });
};

Libro.getAll = (result) => {
  let query = "SELECT * FROM libro";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("books: ", res);
    result(null, res);
  });
};

Libro.getAllPublished = result => {
  sql.query("SELECT * FROM tutorials WHERE published=true", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("tutorials: ", res);
    result(null, res);
  });
};

Libro.updateById = (id, tutorial, result) => {
  sql.query(
    "UPDATE tutorials SET title = ?, description = ?, published = ? WHERE id = ?",
    [tutorial.title, tutorial.description, tutorial.published, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Tutorial with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated tutorial: ", { id: id, ...tutorial });
      result(null, { id: id, ...tutorial });
    }
  );
};

Libro.remove = (id, result) => {
  sql.query("DELETE FROM tutorials WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Tutorial with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted tutorial with id: ", id);
    result(null, res);
  });
};

Libro.removeAll = result => {
  sql.query("DELETE FROM tutorials", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} tutorials`);
    result(null, res);
  });
};

module.exports = Libro;