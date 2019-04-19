# Braspag SDK para Node.JS

SDK para Braspag / Cielo em Node.JS

[![Build Status](https://travis-ci.org/italoiz/braspag-sdk-nodejs.svg?branch=master)](https://travis-ci.org/italoiz/braspag-sdk-nodejs)
[![Coverage Status](https://coveralls.io/repos/github/italoiz/braspag-sdk-nodejs/badge.svg?branch=master)](https://coveralls.io/github/italoiz/braspag-sdk-nodejs?branch=master)

> :warning: Este AINDA é um trabalho em progesso... Ainda não está pronto para uso, mas se deseja contribuir, siga para seção "[Contribuindo](#contribuindo)".

## Instalação

Usando NPM
```
npm install braspag-sdk-nodejs
```

Usando Yarn
```
yarn add braspag-sdk-nodejs
```

## Contribuindo

:clap::clap: Ótimo! Se está planejando contribuir com a estrutura, certifique-se de seguir os padrões a seguir, pois é sempre bom trabalhar com um padrão e com uma base de código consistente.

Veja a lista de scripts disponíveis com:
```
npm run
```

### Testes & Linting

1. Faça o lint do código rodando `npm run lint`. Assim matém o código livre de bagunça.
2. Lembre-se de escrever testes para todas as alterações / correções de bugs.


### Práticas Gerais

Prefira sempre usar os recursos mais recentes do ES6, por exemplo:

1. Use `Spread` ao invés de `arguments`.
2. Certifique-se de escrever bloco de documentação adequado usando [JSDoc](http://usejsdoc.org/).
3. Evite usar `bind` ou `call`. Não podemos garantir o escopo de nenhum método.

## Issues & PR

É sempre útil tentar seguir certas práticas ao criar novas Issues ou PRs, pois isso poupará o tempo de todos.

1. Sempre tente criar testes unitários quando encontrar um problema (se possível).
2. Compartilhe algum contexto sobre o que você está tentando fazer, com código suficiente para reproduzir o problema.
