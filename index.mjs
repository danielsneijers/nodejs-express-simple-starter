import express from "express";

const app = express();

app.get("/", (req, res) => res.text("hello world!"));

app.listen(8080, () => {
  console.log("Server running at port 8080");
});
