<!-- @format -->

##Desafio técnico web - processo seletivo da Cubos
Esta é uma aplicação feita com [React.js](https://pt-br.reactjs.org/ "react.js"), utilizando bibliotecas comom axios, styled-components, node-sass, etc.

### Instalação

- Instale o node.js v10.13.0 ou superior - [Link](https://nodejs.org/en/ "node.js")
- Instale o yarn versão 1.22.4 ou superior - [Link](https://classic.yarnpkg.com/en/docs/install/#windows-stable "yarn")
- Copie os arquivos para a pasta desejada
- Deifina **apiKey** do TMDB;
  Acesse o arquivo `./src/services/api.js` e altere o `<<apiKey>>`, com sua chave de acesso da api do TMDB. (Chave usada no desenvolvimento: `d386a44337bfe21b01b497692749ac4d` )

      const apiUrl = 'https://api.themoviedb.org/3';
      const apiKey = '<<apiKy>>';

- Execute o comando `yarn install`
- Execute o comando ` yarn start`

A aplicação deve executar no localhost, na porta disponível.

###Uso
Para executar a busca de filmes por nome, digite o nome no filme a ser buscado e aperte enter, aparecerá uma lista de resultados, separados em páginas de cinco itens. Clicando em cada item, exibe a pagina como o conteudo completo do filme, assim como pedido na descrição do desafio.
