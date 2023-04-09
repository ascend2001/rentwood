import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import serverRoutes from './routes/requests.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(express.json());
app.use(cors());
app.use('/wap', serverRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Process is running on port:${PORT}`));
