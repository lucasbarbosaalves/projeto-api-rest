import app from './src/app.js' // importa a aplicação express criada em outro arquivo

const port = process.env.PORT || 3000; // define a porta que será utilizada pela aplicação

app.listen(port, () => { // inicia o servidor e coloca a aplicação para escutar as requisições que chegam através da porta definida
  console.log(`Servidor escutando em http://localhost:${port}`) // imprime uma mensagem no console indicando que o servidor está funcionando e em qual porta está escutando
})
