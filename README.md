# Braspag SDK para Node.JS

SDK para Braspag / Cielo em Node.JS

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coverage Status][coverage-image]][coverage-url]
[![Licence Type][licence-image]][licence-url]

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

[npm-image]: https://img.shields.io/npm/v/braspag-sdk.svg
[npm-url]: https://www.npmjs.com/package/braspag-sdk

[licence-url]: https://github.com/italoiz/braspag-sdk-nodejs/blob/develop/LICENSE
[licence-image]: https://img.shields.io/npm/l/braspag-sdk.svg

[travis-url]: https://travis-ci.org/italoiz/braspag-sdk-nodejs
[travis-image]: https://travis-ci.org/italoiz/braspag-sdk-nodejs.svg?branch=master

[coverage-url]: https://coveralls.io/github/italoiz/braspag-sdk-nodejs?branch=master
[coverage-image]: https://coveralls.io/repos/github/italoiz/braspag-sdk-nodejs/badge.svg?branch=master
