const express = require("express");
const cors = require("cors");
const { moviesRouter } = require("./routes/movies");
const { config } = require("dotenv");
const { connectDB } = require("./config/database");

config(); // Carga las variables de entorno
connectDB(); // Conecta a la base de datos

const app = express();
const port = process.env.PORT || 1234;

app.disable("x-powered-by"); // Desactiva el encabezado que muestra la tecnología Express

app.use(express.json()); // Middleware para parsear JSON
app.use(cors()); // Middleware para habilitar CORS

app.use("/movies", moviesRouter); // Ruta principal de películas
app.use((_, res) => {
  res.status(404).send("Not found"); // Manejo de rutas no encontradas
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app; // Exporta el servidor
