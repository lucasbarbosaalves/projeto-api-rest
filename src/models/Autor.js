import mongoose from "mongoose";

// Define a estrutura do schema para a coleção de autores
const autorSchema = new mongoose.Schema(
  {
    id: {type: String},
    nome: {
      type: String,
      required: [true, "O nome do(a) autor(a) é obrigatório"]
    },
    nacionalidade: {type: String}
  },
  // Configuração para não incluir o atributo "__v" no documento
  {
    versionKey: false
  }
);

// Cria o modelo para a coleção de autores
const autores = mongoose.model("autores", autorSchema);

// Exporta o modelo para ser utilizado em outras partes do código
export default autores;
