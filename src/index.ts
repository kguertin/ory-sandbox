import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

app.post('/register', (req: Request, res: Response) => {
  console.log(req.body);
});

app.listen(3000, () => console.log('Listening on port 3000'));
