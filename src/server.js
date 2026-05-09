import express from 'express';
import routes from './routes.js';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

// hanya untuk log saja
const host = process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0';

app.use(express.json());
app.use(cors({
  origin: '*'
}));

app.use('/', routes);

// ⚠️ INI BAGIAN PALING PENTING
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://${host}:${port}`);
});