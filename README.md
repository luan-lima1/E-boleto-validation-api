# API - REST desenvolvida em Node.js, Typescript e AWS Lambda.

Esta API recebe os números (sem pontos, traços e espaços) da linha digitável de boletos bancários, ou boletos de convênios, e se válidos, retorna os valores da solicitação em status(200), código de barras (barCode), validade (expirationDate),valor (amount).

# Inserção de Linha Digitável:

A linha digitável do seu boleto deve ser inserida sem pontos, traços e espaços via parâmetro. Exemplo: (GET) "http://localhost:8080/boleto/123456". Se válido, o boleto irá retornar os seguintes valores em JSON: barCode, expirationDate e amount.

Aqui está alguns exemplos de boletos válidos.
26091408099776913423632700000006190050000019446  - Bancário.
828900000008509100181711109222814012358741712157 - Convênio.


# Como Funciona a Validação:

A aplicação faz a validação dos digitos verificadores nos campos da linha digitável e através do cálculo de módulos 10 e 11, uma vez validado, o boleto irá retornar os dados especificados na descrição da API.

# Teste Complementar (Opcional):

Este site valida boletos bancários e retorna os dados de forma idêntica aos da API. O barCode gerado pela API, pode ser ser validado neste site, e mostra que o retorno é válido.
https://www.boletobancario-codigodebarras.com/2019/04/boleto-bancario-de-cobranca.html

# Instalar Dependências do Projeto:

Para instalar as dependências necessárias para a execução do projeto, execute um dos seguintes comandos no terminal de sua máquina, ou do seu interpretador de código-fonte. 

```bash
  yarn add
  ou
  npm install
```

# Executar Aplicativo no Ambiente de Desenvolvimento:

Para executar o projeto, execute um dos seguintes comandos no terminal de sua máquina, ou do seu interpretador de código-fonte, e em seguida siga o exemplo do item "Inserção de Linha Digitável". 

```bash
  yarn dev
  ou
  npm run dev
```

# Para Compilar a Aplicação em Javascript:

Para compilar o projeto, execute um dos seguintes comandos no terminal de seu interpretador de código-fonte, o projeto compilado em .js irá para uma pasta chamada "dist".

```bash
  yarn build
  ou
  npm run build
```

# Para Realizar os Testes Unitários:

Este projeto utiliza Jest para realizar testes. Para iniciar os testes unitários execute um dos seguintes comandos no terminal de seu interpretador de código-fonte.

```bash
  yarn test
  ou
  npm run test
```
