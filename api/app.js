import express from 'express';
import apiRoutes from './src/routes/api.routes.js';
const app = express();
app.use(express.json()); // ->entiende los jsons
app.use('/api',apiRoutes)
export default app;

