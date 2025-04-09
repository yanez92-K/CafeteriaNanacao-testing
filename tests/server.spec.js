const request = require("supertest");
const { faker } = require("@faker-js/faker")
const app = require("../index");

describe("Operaciones CRUD de cafes", () => {
  it("Debería devolver todos los cafés", async () => {
    const response = await request(app)
      .get("/cafes")
    expect(response.statusCode).toBe(200);
  });
/* 
  1. Testea que la ruta GET /cafes devuelve un status code 200 y el tipo de dato recibido es un arreglo con por lo menos 1 objeto. (3 Puntos)
*/
    it("La respuesta debe ser un arreglo con al menos un objeto", async () => {
      const response = await request(app)
          .get("/cafes");
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThan(0);
      expect(typeof response.body[0]).toBe("object");
    });

/* 
  2. Comprueba que se obtiene un código 404 al intentar eliminar un café con un id que no existe. (2 Puntos)
*/
    it("Retornar 404 al eliminar café con id que no existe", async () => {
        const idInexistente = 999; 
        const response = await request(app)
            .delete(`/cafes/${idInexistente}`)
            .set("Authorization", "Bearer tokenDePrueba");
        expect(response.statusCode).toBe(404);
        expect(response.body.message).toBe("No se encontró ningún cafe con ese id");

    });

  /*
  3. Prueba que la ruta POST /cafes agrega un nuevo café y devuelve un código 201. (2 Puntos)
  */
    it("Post retorna 201 ", async () => {
      const payload = {
          nombre: faker.commerce.product(),
        };
      const response = await request(app)
        .post("/cafes")
        .send(payload);
      expect(response.statusCode).toBe(201);
    });
    /* 
  4. Prueba que la ruta PUT /cafes devuelve un status code 400 si intentas actualizar un café enviando un id en los parámetros que sea diferente al id dentro del payload. (3 Puntos)
  */
    it("PUT retorna 400 si el id del parámetro y del body no coinciden", async () => {
      const idUrl = 1;
      const idBody = 456; 
      const payload = {
        id: idBody,
        nombre: "Actualización inválida",
      };
      const response = await request(app)
        .put(`/cafes/${idUrl}`)
        .send(payload)
        .set("Authorization", "Bearer tokenDePrueba"); 
    
      expect(response.statusCode).toBe(400);
    });

});
