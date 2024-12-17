const z = require("zod");

const movieSchema = z.object({
  titulo: z
    .string({
      required_error: "Titulo is required",
      invalid_type_error: "Titulo must be a string",
    })
    .nonempty(),
  genero: z
    .array(z.enum(["comedy", "action", "drama", "horror", "documentary"]))
    .nonempty(),
  año: z.number().int().max(2024).min(1895),
  director: z.string().nonempty(),
});

function validateMovie(object) {
  return movieSchema.safeParse(object);
}

function validatePartialMovie(object) {
  return movieSchema.partial().safeParse(object); // partial: para que todas las propiedades definidas en él se vuelvan opcionales.
}

module.exports = { validateMovie, validatePartialMovie };
