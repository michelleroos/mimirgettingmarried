const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001; // use live port or the declared one
var cors = require('cors'); // req handled by cors first? 
app.use(cors()) // handler
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});