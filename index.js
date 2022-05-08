const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000; // use live port or the declared one
var cors = require('cors'); // req handled by cors first? 
app.use(cors()) // handler
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: {
      name: "mimirgettingmarried",
      version: "0.1.0",
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});