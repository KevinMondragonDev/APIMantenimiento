// src/app.ts
import express, { Application } from "express";
import bodyParser from "body-parser";
import routes from "./routes";
import connectDB from "./database";

const app: Application = express();
const PORT = 3034;

// Conexión a la base de datos
connectDB();

// Middleware
app.use(bodyParser.json());

// Rutas
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ` + PORT);
});
