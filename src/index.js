import express, { json } from "express";
import cors from "cors";
import { moviesRouter } from "./routes/movies.js";
import { config } from "dotenv";
import { connectDB } from "./config/database.js";

config();
connectDB();



const app = express();

const port = process.env.PORT ?? 1234;
app.disable('x-powered-by'); //Disable to show the express(tecnologia) in the header

app.use(json());
app.use(cors());


app.use("/movies", moviesRouter);
app.use((_, res) => {
  res.status(404).send("Not found");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})