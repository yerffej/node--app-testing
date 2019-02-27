const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

// GET /users
// Give users a name prop and age prop
app.get('/users', (req, res) => {
  res.status(200).send([
      { name: 'Jeffrey', age: 32},
      { name: 'Hildegard', age: 324},
      { name: 'Tuvulra', age: 365}
  ]);
  //
});


app.listen(3000);
module.exports.app = app;
