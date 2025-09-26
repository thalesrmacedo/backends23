const express = require('express');
const router = express.Router();

// Simulação de dados (normalmente viriam do banco de dados)
let saldo = 1000;
let historico = [];

// Rota: Consultar saldo
router.get('/saldo', (req, res) => {
  res.json({ saldo });
});

// Rota: Realizar transferência
router.post('/transferencia', (req, res) => {
  const { valor, destino } = req.body;

  if (!valor || !destino) {
    return res.status(400).json({ erro: 'Informe valor e destino' });
  }

  if (valor > saldo) {
    return res.status(400).json({ erro: 'Saldo insuficiente' });
  }

  saldo -= valor;
  historico.push({ tipo: 'Transferência', valor, destino, data: new Date() });

  res.json({ mensagem: `Transferência de R$${valor} para ${destino} realizada com sucesso.`, saldoAtual: saldo });
});

// Rota: Histórico de transações
router.get('/historico', (req, res) => {
  res.json(historico);
});

module.exports = router;
