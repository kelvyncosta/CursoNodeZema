import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3333;

app.get('/', (request, response) =>
  response.json({
    message: 'Hello CursoZema Typescript',
  }),
);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
