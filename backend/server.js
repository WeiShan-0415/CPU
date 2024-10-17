// backend/server.js
const express = require('express');
const helloRoute = require('./api/hello');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api', helloRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
