import NaoEncontrado from "../erros/NaoEncontrado.js";

function manipulador404(req, res, next) {
  const erro404 = new NaoEncontrado();
  next(erro404); // enviando para o manipulador de erro
}

export default manipulador404;
