# Flapper Challenge API

Essa API tem como objetivo a criação de cotações calculando o peso cubado através de informações passadas como peso, altura, largura etc...

A arquitetura montada para está API busca seguir os design patterns tais como os princípios SOLID.

### Camada de Domínio

Caminho: `src/domain`

É o diretório de alto nivel da aplicação onde ficam as entidades e regras de negócio, podendo ser codada sem se preocupar com o baixo nivel, pois apenas dita como o mundo externo (frameworks, providers etc...) devem se comunicar com o domínio. O nosso domínio então é composto por 3 componentes chaves:
- `src/domain/entity` -> Dir que contem a estrutura de um determinado dominio.
- `src/domain/data` -> Um contrato que dita como o mundo externo devera interagir com o nosso domínio.
- `src/domain/useCases` -> Nossos casos de uso que contem as nossas regras de négocio.

Nesse diretorio podemos ver alguns principios na prática como:
- Single responsability principle -> Nosso dominio, assim como o que está dentro dele vai ter apenas um mótivo para mudar, motivo é uma palavra ampla, então podemos assumir que com motivo estamos querendo dizer um grupo ou area, já que eestes são os principais motivos para um software mudar.
- Open close principle -> Nossa interacão com o mundo externo(interface) está aberta a extensão mas fechada para modificacoes
- Dependency inversion principle -> Como o nosso caso de uso depende de um contrato (uma interface) qualquer mudança no mundo exterior (baixo nivel) não afetara o nosso alto nivel.

### Camada de Providers

Caminho: `src/providers`

Nosso baixo nivel, aqui temos a nossa interação com o mundo externo, banco de dados, APIS etc... eles devem sempre seguir um contrato estabelecido pelo dominio. Isso é um padrão da arquitetura limpa

### Camada de Infra

Caminho: `src/infra`

Aqui temos duas coisas importantes para cada módulo:
- _Factorys_ -> Diz como o nosso caso de uso deve ser criado e instanciado. Em muitos projetos se usa uma lib para fazer a injeção de dependencia, as fabricas são apenas uma maneira manual de fazer isso.
- _Controllers_ -> A nossa 'secretaria' que apenas recebe os dados passa para o caso de uso e retorna algo. Está não tem conhecimento sobre o que ocorre no nosso alto nivel.

### Camada de Testes

Essa API também foi construida pensando em TDD por isso é fácil realizar testes para cada caso de uso, a lib usada foi o jest.

### Como rodar o projeto

Essa API utiliza docker que roda a aplicação e o banco de dados, para rodar basta rodar os comandos abaixo:

Suba os containers do docker (é preciso ter o docker instalado na sua maquina, e garantir que as portas 3000 3 3306 da sua maquina estejam livres)
```sh
docker-compose up -d
```

Verifique se deu tudo certo rodando, devem aparecer duas imagens rodando
```sh
docker ps
```

Agora rode as migrations
```sh
yarn run-migrations
```

### Rotas da aplicação

Uma vez que a aplicação estiver de pé e com as migrations já executadas, primeiro é necessario obter um token de autenticação, para isso basta bater na seguinte rota:

`/user/auth` -> passe os seguintes parametros no body 
`{ "email": "teste@teste.com", "password": "123456"}` (este user já terá sido previamente criado nas migrations)

Voce recebera um token, com o token voce pode bater nas seguintes rotas:

`/quotes/create Create Quote` -> passe os seguintes parametros, a resposta será os dados da cotação junto com o peso cubado calculado
```ssh
{
	"customer": {
		"name": "Bruce Wayne",
		"phone": "(11) 40028922",
		"email": "bruce@teste.com"
	},
	"shipment": {
		"weight": 20,
		"height": 100,
		"width": 40,
		"length": 80
	},
	"transport": {
		"originCity": "São Paulo",
		"destinyCity": "Rio de janeiro"
	}
}
```

`/quotes/list List Quotes` -> passe os parametros limit e offset na querystring, voce recebera uma lista de cotações
`/quotes/list/:customerID List Quotes by customer ID` -> passe os parametros limit e offset na querystring, passe um customer ID no path, voce recebera uma lista de cotações deste customerID


### Como rodar os testes

Rode:
```ssh
yarn test
```

A aplicação criará um diretório chamado `coverage` na raiz, com um folder chamado `lcov-report`, dentro deve conter um arquivo `index.html`, abra este no seu navegador após rodar os testes, o coverage deve estar com 100%, alem claro de todos os testes terem passado, dessa forma garantimos que a aplicação está totalmente coberta por testes.