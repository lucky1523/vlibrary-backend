const getUsers = require('./get-users');
const getTodo = require('./get-todo');
const createUser = require('./create-user');
const updateTodo = require('./update-todo');
const deleteTodo = require('./delete-todo');
const getLibros = require('./get-libros');

module.exports = {
    paths:{
        '/users':{
            ...getUsers,
            ...createUser
        },
        '/users/{id}':{
            ...getTodo,
            ...updateTodo,
            ...deleteTodo
        },
        '/libros':{
            ...getLibros
        },
        '/libros/{id}':{
        },
        '/boletas':{

        },
        '/boletas/{id}':{
        }
    }
}