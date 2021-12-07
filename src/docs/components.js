
module.exports = {
    components: {
        schemas: {
          // id model
          id: {
            type: "string", // data type
            description: "An id of a user", // desc
            example: "1", // example of an id
          },
          // todo model
          Todo: {
            type: "object", // data type
            properties: {
              id: {
                type: "string", // data-type
                description: "Todo identification number", // desc
                example: "ytyVgh", // example of an id
              },
              title: {
                type: "string", // data-type
                description: "Todo's title", // desc
                example: "Coding in JavaScript", // example of a title
              },
              completed: {
                type: "boolean", // data type
                description: "The status of the todo", // desc
                example: false, // example of a completed value
              },
            },
          },
          // User Schema
          User: {
            type: "object", // data type
            properties: {
              username: {
                type: "string", // data-type
                description: "User identification number", // desc
                example: "luciano", // example of an id
              },
              password: {
                type: "string", // data-type
                description: "User's password", // desc
                example: "1234567", // example of a title
              },
              completed: {
                type: "boolean", // data type
                description: "The status of the todo", // desc
                example: false, // example of a completed value
              },
            },
          },
          // Libros Schema
          Libro: {
            type: "object", // data type
            properties: {
                id: {
                    type: "number", // data-type
                    description: "Libro identification number", // desc
                    example: "1", // example of an id
                    },
              author: {
                type: "string", // data-type
                description: "Author of the Book", // desc
                example: "Marquez", // example of an id
              },
              titulo: {
                type: "string", // data-type
                description: "Title's Book", // desc
                example: "Da Vinci Code", // example of a title
              },
              created: {
                type: "date", // data type
                description: "Date created", // desc
                example: "06/12/2021", // example of a completed value
              },
              sinopsis: {
                type: "string", // data type
                description: "Sinopsis of the book", // desc
                example: "Code Da Vinci by someone", // example of a completed value
              },
            },
          },

          // User input model
          UserInput: {
            type: "object", // data type
            properties: {
              username: {
                type: "string", // data type
                description: "User's username", // desc
                example: "luciano", // example of a title
              },
              password: {
                type: "string", // data type
                description: "password", // desc
                example: "123456", // example of a completed value
              },
            },
          },
          // error model
          Error: {
            type: "object", //data type
            properties: {
              message: {
                type: "string", // data type
                description: "Error message", // desc
                example: "Not found", // example of an error message
              },
              internal_code: {
                type: "string", // data type
                description: "Error internal code", // desc
                example: "Invalid parameters", // example of an error internal code
              },
            },
          },
        },
      },
}