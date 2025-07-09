const express = require('express');
const logger = require('./middleware/logger');
const booksRouter = require('./routes/books');

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.use('/api/books', booksRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
