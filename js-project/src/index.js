import express from 'express'
import setupUserController from './users.js';

// setup express
const app = express();
const port = 3000;

// setup base route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// setup controllers
setupUserController(app);

// start express
app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});