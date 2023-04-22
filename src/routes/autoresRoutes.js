import express from "express";
import AutorController from "../controllers/autoresController.js";
import paginar from "../middlewares/paginar.js";

const router = express.Router();

// Definição das rotas para o recurso "autores"
router
  .get("/autores", AutorController.listarAutores, paginar) // Rota para listar todos os autores com paginação
  .get("/autores/:id", AutorController.listarAutorPorId) // Rota para listar um autor específico pelo ID
  .post("/autores", AutorController.cadastrarAutor) // Rota para cadastrar um novo autor
  .put("/autores/:id", AutorController.atualizarAutor) // Rota para atualizar um autor existente pelo ID
  .delete("/autores/:id", AutorController.excluirAutor); // Rota para excluir um autor existente pelo ID

export default router;