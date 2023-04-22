import mongoose from "mongoose";
import ErroBase from "../erros/ErroBase.js";
import RequisicaoIncorreta from "../erros/RequisicaoIncorreta.js";
import ErroValidacao from "../erros/ErroValidacao.js";
import NaoEncontrado from "../erros/NaoEncontrado.js";

// O middleware de erro recebe quatro parâmetros: erro, req, res e next.
// Ele é chamado automaticamente sempre que ocorre um erro em um middleware ou rota subsequente.

// eslint-disable-next-line no-unused-vars
function manipuladorDeErros(erro, req, res, next) {
// Se o erro for um CastError do mongoose, isso significa que a entrada do usuário foi formatada de forma incorreta.
// Por exemplo, se um ObjectId é esperado, mas o usuário forneceu uma string que não pode ser convertida em ObjectId.
// Nesse caso, enviamos uma resposta de erro de requisição incorreta.
  if (erro instanceof mongoose.Error.CastError) {
    new RequisicaoIncorreta().enviarResposta(res);
  }
  // Se o erro for um ValidationError do mongoose, isso significa que a validação do esquema do mongoose falhou.
  // Por exemplo, se um campo obrigatório não foi fornecido ou se um valor não corresponde às regras de validação definidas no esquema.
  // Nesse caso, enviamos uma resposta de erro de validação, incluindo informações sobre quais campos falharam na validação.
  else if (erro instanceof mongoose.Error.ValidationError) {
    new ErroValidacao(erro).enviarResposta(res);
  }
  // Se o erro for uma instância da classe NaoEncontrado, significa que o recurso solicitado não foi encontrado.
  // Nesse caso, enviamos uma resposta de erro personalizada que informa que o recurso não foi encontrado.
  else if (erro instanceof NaoEncontrado) {
    erro.enviarResposta(res);
  }
  // Se o erro não for nenhum dos anteriores, trata-se de um erro interno do servidor.
  // Nesse caso, enviamos uma resposta de erro genérica para o cliente.
  else {
    new ErroBase().enviarResposta(res);
  }
}

export default manipuladorDeErros;