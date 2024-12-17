const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../index"); // Asegúrate de que el archivo 'index.js' esté exportando 'app' correctamente
const { expect } = chai;

chai.use(chaiHttp);

// Ejemplo de prueba
describe("GET /movies", () => {
  it("should return a list of movies", (done) => {
    chai
      .request(app)
      .get("/movies")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("array");
        done();
      });
  });
});
