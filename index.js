import express from "express";
import connection from "./database/db.js";

const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});
connection();
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
