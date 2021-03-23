/* eslint-disable no-console */
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello Zema' });
});

app.listen('3333', () => {
  console.log('Executando na porta 3333');
});
