const sql = require("./db.js");

// constructor
const BoletaReservacion = function(boletareservacion) {
  this.id_num_reservacion=boletareservacion.id_num_reservacion;
  this.id_usuario=boletareservacion.id_usuario;
  this.id_libro=boletareservacion.id_libro;
  this.fecha_reservacion=boletareservacion.fecha_reservacion;
  this.fecha_devolucion=boletareservacion.fecha_devolucion;
  this.created=boletareservacion.created;
  this.updated=boletareservacion.updated;

};

BoletaReservacion.create = (newBoletaReservacion, result) => {
    let query = "INSERT INTO boletareservacion (id_libro,id_usuario,fecha_reservacion,fecha_devolucion) values("
    query+=newBoletaReservacion.id_libro+","
    query+=newBoletaReservacion.id_usuario+" ,"
    query+=newBoletaReservacion.fecha_reservacion+","+newBoletaReservacion.fecha_devolucion+")"
    sql.query(query, newBoletaReservacion, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    sql.query(
        "UPDATE libro SET reservado = true WHERE id_libro = ?",
        [newBoletaReservacion.id_libro],
        (err, resUpdate) => {
          if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
          }
        }
    );

    console.log("created reservation form: ", { id: res.insertId, ...newBoletaReservacion });
    result(null, { id: res.insertId, ...newBoletaReservacion });
  });
};



module.exports = BoletaReservacion;