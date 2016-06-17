const fallback = require('express-history-api-fallback');
const express = require('express');
const app = express();

const root = `${__dirname}`;
const node_modules = `${root}/..`;

app.use(express.static(node_modules));
app.use(fallback('index.html', { root }));

app.listen(3005, () => {
  console.log('listening to http://localhost:3005');
});
