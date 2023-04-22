import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";
import manipuladorDeErros from "./middlewares/manipuladorDeErros.js";
import manipulador404 from "./middlewares/manipulador404.js";

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("conexão com o banco feita com sucesso");
});
// Criar uma instância do aplicativo Express
const app = express();
// Middleware para analisar o corpo da solicitação como JSON
app.use(express.json());
routes(app);

app.use(manipulador404);

// Middleware de erro (4 parametros) -> interceptando todos os erros.
// eslint-disable-next-line no-unused-vars
app.use(manipuladorDeErros);
// Exportar o aplicativo Express para uso em outros arquivos
export default app;
