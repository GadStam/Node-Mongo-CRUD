const { Router } = require("express");
const { MovieController } = require("../controllers/movies");
const { asyncHandler } = require("../handlers/asyncHandler");
const { errorHandler } = require("../middleware/errorHandler");

const moviesRouter = Router();

moviesRouter.get("/", asyncHandler(MovieController.getAll));
moviesRouter.get("/:id", asyncHandler(MovieController.getById));
moviesRouter.put("/:name", asyncHandler(MovieController.getPokemon)); // Para probar axios
moviesRouter.post("/", asyncHandler(MovieController.create));
moviesRouter.delete("/:id", asyncHandler(MovieController.delete));
moviesRouter.patch("/:id", asyncHandler(MovieController.update));

// Middleware de manejo de errores
moviesRouter.use(errorHandler);

module.exports = { moviesRouter };
