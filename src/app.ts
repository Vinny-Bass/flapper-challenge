import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.json({ message: "Hello World!" });
})

app.listen(3000);