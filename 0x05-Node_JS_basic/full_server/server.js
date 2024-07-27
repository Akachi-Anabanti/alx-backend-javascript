import mapRoutes from './routes';

const express = require('express');

const app = express();

const PORT = 1245;

mapRoutes(app);

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});

export default app;
module.exports = app;
