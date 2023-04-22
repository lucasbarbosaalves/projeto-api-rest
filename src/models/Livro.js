// Importando o módulo mongoose
import mongoose from "mongoose";

// Definindo o esquema do modelo de dados "Livro"
const livroSchema = new mongoose.Schema({
  id: { type: String }, // Campo "id" do tipo String
  titulo: {
    // Campo "titulo" do tipo String, obrigatório
    type: String,
    required: [true, "O título do livro é obrigatório"],
  },
  autor: {
    // Campo "autor" do tipo ObjectId, referenciando o modelo "autores", obrigatório
    type: mongoose.Schema.Types.ObjectId,
    ref: "autores",
    required: [true, "O(a) autor(a) é obrigatório"],
  },
  editora: {
    // Campo "editora" do tipo String, obrigatório, com valores permitidos ["Casa do código", "Alura"]
    type: String,
    required: [true, "A editora é obrigatória"],
    enum: {
      values: ["Casa do código", "Alura"],
      message: "A editora {VALUE} não é um valor permitido.",
    },
  },
  numeroPaginas: {
    // Campo "numeroPaginas" do tipo Number, validado para ter valor entre 10 e 5000
    type: Number,
    validate: {
      validator: (valor) => {
        return valor >= 10 && valor <= 5000;
      },
      message:
        "O número de páginas deve estar entre 10 e 5000. Valor fornecido: {VALUE}",
    },
  },
});

// Criando o modelo de dados "Livro" a partir do esquema definido acima
const livros = mongoose.model("livros", livroSchema);

// Exportando o modelo de dados "Livro"
export default livros;
