import express from 'express';
import cors from 'cors';
import routes from './routes.js';

const app = express();
const port = 3000;

// ✅ WAJIB
app.use(cors({
  origin: '*'
}));

app.use(express.json());
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});