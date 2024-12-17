import {Router} from 'express'
import { MovieController } from '../controllers/movies.js';
import { asyncHandler } from '../handlers/asyncHandler.js'
import { errorHandler } from '../middleware/errorHandler.js  ';
export const moviesRouter = Router();


moviesRouter.get("/", asyncHandler(MovieController.getAll));
moviesRouter.get("/:id", asyncHandler(MovieController.getById));
moviesRouter.post("/", asyncHandler(MovieController.create));
moviesRouter.delete("/:id", asyncHandler(MovieController.delete));
moviesRouter.patch("/:id", asyncHandler(MovieController.update));

// Middleware de manejo de errores
moviesRouter.use(errorHandler);