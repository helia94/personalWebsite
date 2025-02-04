const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

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

app.listen(3001, () => console.log("Proxy running on port 3001"));
