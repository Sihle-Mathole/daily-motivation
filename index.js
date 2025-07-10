import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://zenquotes.io/api/random");
    const result = response.data;
    console.log(result);
    res.render("app.ejs", { data: result[0] });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("app.ejs", {
      error: error.message,
    });
  }
});

app.post("/submit", async (req, res) => {
  try {
    const response = await axios.get("https://zenquotes.io/api/random");
    const result = response.data;
    console.log(result);
    res.render("app.ejs", { data: result[0] });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("app.ejs", {
      error: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});


