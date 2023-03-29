import express from 'express';

import routes from './src/routes/index.js';

import connect from './src/database/index.js';

connect(); // Conecta ao banco de dados

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3000, () => {
    console.log("Server started on port 3000");
    }
);

