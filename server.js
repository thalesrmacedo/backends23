const express = require('express');
const app = express();
const financeRoutes = require('./routes/financeRoutes');

app.use(express.json()); // permite receber JSON no corpo da requisição

// Rotas principais da aplicação
app.use('/api', financeRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.send("Bem-vindo ao app financeiro! Caminhe pelos endereços (rotas): <br><br> Consultar saldo (GET): http://localhost:3000/api/saldo <br><br> Histórico de transações (GET): http://localhost:3000/api/historico <br><br> Transferência (POST): http://localhost:3000/api/transferencia");
  });
  