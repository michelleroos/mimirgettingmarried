// ES5 way of requiring
const express = require("express");
const app = express();
const { google } = require('googleapis');
const PORT = process.env.PORT || 3001; // use live port or the declared one
var cors = require('cors'); // req handled by cors first? 
app.use(cors()) // handler
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

  // How to filter user?
  res.send(getRows.data.values); // express/app sends to the client (the body)
  // res.send(getRows.data.values.filter(entry => entry[0] === req)); 
});

// app.put("/api/rsvp/email"), async (req, res) => { // <<<<<<<<<<<<<<<<<<<

//   // create client instance for auth
//   const client = await auth.getClient();
//   // create Google sheets API instance
//   const googleSheets = google.sheets({ version: "v4", auth: client })

//   const updateRow = await googleSheets.spreadsheets.values.append({
//     auth,
//     spreadsheetId,
//     range,
//     valueInputOption: "USER_ENTERED", // parses info
//     resource: {
//       values: [
//         // Object.keys(req.body), // header
//         Object.values(req.body) // values
//       ]
//     }
//   })

//   res.send(updateRow);

// }

app.post("/api/rsvp", async (req, res) => {

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
        // Object.keys(req.body), // header
        Object.values(req.body) // values
      ]
    }
  })

  res.send(writeRows);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});