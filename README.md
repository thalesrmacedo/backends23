*Backend S23*

1 - Fazer download dos arquivos
2 - No VSCode, ir no terminal e executar os comandos:

npm init -y
npm install express
node server.js

3 - Verificar os links com as rotas GET (1 e 2)
4 - Abrir o POSTMAN para a rota 3:

Crie uma requisição POST para: http://localhost:3000/api/transferencia
Vá em Body → raw → JSON e cole:

{
  "cliente:" NOMEDOALUNO
  "valor": 100,
  "destino": "Conta 1234-5"
}

Clique em Send.
