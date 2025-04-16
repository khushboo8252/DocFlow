const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoute');
const documentRoutes = require('./routes/documentRoute');
const signRoutes = require('./routes/signRoute');
const errorHandler = require('./middlewares/errorHandler');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/documents', documentRoutes);
app.use('/api/sign', signRoutes);

app.use(errorHandler);

module.exports = app;
