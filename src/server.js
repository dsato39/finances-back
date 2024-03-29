import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bearerToken from "express-bearer-token";
dotenv.config();
import userRoute from "./modules/user/user.route.js";
import authRoute from "./modules/auth/auth.route.js";
import categoriesRoute from "./modules/categories/categories.route.js";
import metasRoute from "./modules/metas/metas.route.js";
import transacoesRoute from "./modules/transacoes/transacoes.route.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(bearerToken());

app.use("/users", userRoute);
app.use("/auth", authRoute);
app.use("/categories", categoriesRoute);
app.use("/metas", metasRoute);
app.use("/transacoes", transacoesRoute);

app.get("/", (_, res) => {
  return res.send("Sistema está operacional!");
});

app.listen(8080, () => {
  console.log("Servidor rodando na porta 8080.");
});

module.exports = app;
