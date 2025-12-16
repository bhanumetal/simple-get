const express = require("express");
const app = express();
const PORT = 8000;

// Simple GET Route 1
app.get("/hello", (req, res) => {
  res.json({ message: "Hello World!" });
});

// Simple GET Route 2
app.get("/info", (req, res) => {
  res.json({ app: "My Express API", version: "1.0" });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
