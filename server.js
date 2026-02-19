const express = require("express");
const app = express();

// Railway dynamic port
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Travsiam CRM Server Running Successfully 🚀");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
