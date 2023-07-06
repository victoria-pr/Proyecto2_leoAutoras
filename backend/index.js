import express from "express";
import router from "./routes/router.js";

const app = express(); //Creamos una app de express

app.use(express.json());
app.use(express.urlencoded({ extended: true })); //Para que pueda leer los datos que le enviamos desde el cliente en formato JSON y urlencoded (formularios) y los convierta en objetos de JS para que los podamos usar en el servidor

app.get("/", (req, res) => {
  res.send("Hello women");
});

app.use("/api", router);

app.listen(3200, () => {
  console.log("Server is running in port 3200");
});
