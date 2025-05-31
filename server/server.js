const express = require("express");
const path = require("path");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors()); // Allow frontend requests

// Serve the file for download
app.get("/download", (req, res) => {
  const filePath = path.join(__dirname, "files", "ransomware.txt"); // Change to your file
  res.download(filePath, "ransomware.txt"); // Triggers file download
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
