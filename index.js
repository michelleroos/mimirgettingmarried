// ES5 way of requiring
const express = require("express");
const app = express();
const { google } = require('googleapis');
const PORT = process.env.PORT || 3001; // use live port or the declared one
var cors = require('cors'); // req handled by cors first? 
app.use(cors()) // handler

// app.set("view engine", "ejs");
// app.use(express.urlencoded({ extended: true }));

// app.get("/rsvp"), (req, res) => {
//   res.render("index")
// }

const auth = new google.auth.GoogleAuth({
  keyFile: "./config/credentials.json",
  scopes: 'https://www.googleapis.com/auth/spreadsheets',
});

const spreadsheetId = "1-R0vjBCOD5hcipk9AQbVUwQAH_0dFvQB2qs5gxsxWg0";
const range = "rsvp";

app.get("/api/rsvp", async (req, res) => { // api endpoint returns a CB. We decide what to do w res thru CB

  // create client instance for auth
  const client = await auth.getClient();
  // create Google sheets API instance
  const googleSheets = google.sheets({ version: "v4", auth: client })

  // read rows
  const getRows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range,
  });

  res.send(getRows.data); // express/app sends to the client (the body)
});

app.post("/api/rsvp", async (req, res) => {

  console.log(req);

  // create client instance for auth
  const client = await auth.getClient();
  // create Google sheets API instance
  const googleSheets = google.sheets({ version: "v4", auth: client })

  const writeRows = await googleSheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range,
    valueInputOption: "USER_ENTERED", // parses info
    resource: {
      values: [
        ["XXXXXXXXX", "XXXXXXXXX"], // this is one row
      ]
    }
  })

  res.send(writeRows);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});