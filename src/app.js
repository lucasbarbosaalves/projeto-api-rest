import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("conexão com o banco feita com sucesso");
});
// Criar uma instância do aplicativo Express
const app = express();
// Middleware para analisar o corpo da solicitação como JSON
app.use(express.json());
routes(app);
// Exportar o aplicativo Express para uso em outros arquivos
export default app;
