# Projeto de API REST
Durante o desenvolvimento deste projeto de API REST, contamos com a ajuda e orientação da plataforma de cursos online Alura. Com base nos ensinamentos adquiridos, criamos uma API Rest para cadastrar recursos como livros e autores, aplicando as melhores práticas de desenvolvimento de software.

## Funcionalidades
A API REST possui as seguintes funcionalidades:

- Cadastrar livros e autores
- Buscar livros e autores
- Atualizar livros e autores
- Excluir livros e autores

Para realizar essas funcionalidades, seguimos as orientações da Alura e dividimos os pacotes em controlador, modelos e rotas, utilizando os verbos HTTP apropriados.

## Conexão com MongoDB
Utilizamos a biblioteca Mongoose para estabelecer a conexão com o MongoDB. Além disso, criamos uma conta no DB Atlas para colocar nosso banco na nuvem. Essa solução permitiu a inserção de documentos de forma simples, utilizando apenas a string de conexão.

## Automatização de processo
Para agilizar o processo de desenvolvimento, utilizamos o Nodemon, uma ferramenta muito útil que realiza o live reload.

## Associação entre entidades
Através dos cursos da Alura, aprendemos a realizar a associação entre duas entidades do Mongo, as coleções de livros e autores, utilizando o recurso de populate.

Estou muito grato à plataforma Alura por nos fornecer conhecimento e habilidades para a criação de APIs Restful e desenvolvimento de software em geral.

## Últimas atualizações
Criado classes para tratativas de erros que são recebidas por um middleware chamado manipuladorDeErros() para tornar a aplicação mais segura e tratar de requisições incorretas ou não encontradas.

Refatorado o código utilizando async/await para evitar possíveis erros da programação assíncrona.