const express = require("express");
const { google } = require('googleapis');
const PORT = process.env.PORT || 3001;
const app = express();

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

app.get("/api/rsvp", async (req, res) => {

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

  res.send(getRows.data);
});

// app.post("/rsvp", async (req, res) => {

//   // create client instance for auth
//   const client = await auth.getClient();
//   // create Google sheets API instance
//   const googleSheets = google.sheets({ version: "v4", auth: client })

//   const writeRows = await googleSheets.spreadsheets.values.append({
//     auth,
//     spreadsheetId,
//     range,
//     valueInputOption: "USER_ENTERED", // parses info
//     resource: {
//       values: [
//         ["XXXXXXXXX", "XXXXXXXXX"], // this is one row
//       ]
//     }
//   })

//   res.send(writeRows);
// });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});