module.exports = {
    get: {
        tags: ["Libro CRUD operations"], // operation's tag.
        description: "Get Libros", // operation's desc.
        operationId: "getLibros", // unique operation id.
        parameters: [], // expected params.
        // expected responses
        responses: {
          // response code
          200: {
            description: "Libros were obtained", // response desc.
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Libro", // Todo model
                },
              },
            },
          },
        },
    }
}