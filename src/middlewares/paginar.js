// Importando o módulo RequisicaoIncorreta do arquivo '../erros/RequisicaoIncorreta.js'
import RequisicaoIncorreta from "../erros/RequisicaoIncorreta.js";

// Definindo a função 'paginar' como assíncrona, que recebe os parâmetros 'req', 'res' e 'next'
async function paginar(req, res, next) {
  try {
    // Desestruturando os valores 'limite', 'pagina' e 'ordenacao' do objeto 'query' da requisição
    let { limite = 5, pagina = 1, ordenacao = "_id:-1" } = req.query;

    // Separando o valor de 'ordenacao' em 'campoOrdenacao' e 'ordem', com base no caractere ':'
    let [campoOrdenacao, ordem] = ordenacao.split(":");

    // Convertendo os valores de 'limite', 'pagina' e 'ordem' para números inteiros
    limite = parseInt(limite);
    pagina = parseInt(pagina);
    ordem = parseInt(ordem);

    // Obtendo o resultado da consulta anterior à função atual através da requisição 'req'
    const resultado = req.resultado;

    // Verificando se 'limite' e 'pagina' são maiores que zero
    if (limite > 0 && pagina > 0) {
      // Executando a consulta para a paginação com base nos valores de 'campoOrdenacao', 'ordem', 'limite' e 'pagina'
      const resultadoPaginado = await resultado.find()
        .sort({ [campoOrdenacao]: ordem })
        .skip((pagina - 1) * limite)
        .limit(limite)
        .exec();

      // Retornando o resultado paginado em formato JSON com status 200
      res.status(200).json(resultadoPaginado);
    } else {
      // Caso 'limite' ou 'pagina' não sejam maiores que zero, repassa o erro para o próximo middleware
      next(new RequisicaoIncorreta());
    }
  } catch (erro) {
    // Caso ocorra algum erro durante a execução da função, repassa o erro para o próximo middleware
    next(erro);
  }
}

// Exportando a função 'paginar' como padrão para que possa ser importada em outros arquivos
export default paginar;