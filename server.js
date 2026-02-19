const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <h1>Travsiam CRM is Running</h1>
    <p>Company: TRAVSIAM DESTINATION MANAGEMENT CO., LTD.</p>
    <p>Email: INFO@TRAVSIAM.COM</p>
  `);
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
