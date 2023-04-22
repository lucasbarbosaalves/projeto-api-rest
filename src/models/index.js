import "./validadorGlobal.js";
import autores from "./Autor.js";
import livros from "./Livro.js";

export { autores, livros };

/* Foi criado um arquivo index.js na pasta model do projeto para exportar os módulos 'autores' e 'livros' que são importados 
em outras partes do código. Além disso, o arquivo index.js também importa o módulo 'validadorGlobal.js' para que ele seja executado 
ao importar os outros módulos. Isso torna o processo de importação mais fácil e claro para outras partes do código.
*/
