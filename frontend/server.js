const express = require("express");
const cors = require("cors");

const app = express();

const allowedOrigins = ["http://localhost:3000", "https://jous.app"];
app.use(cors({ origin: allowedOrigins }));

app.get("/proxy", async (req, res) => {
  try {
    const targetUrl = req.query.url;
    const response = await fetch(targetUrl);
    const text = await response.text();
    res.send(text);
  } catch (error) {
    res.status(500).send("Error fetching data");
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Proxy running on port ${PORT}`));
