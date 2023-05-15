import express from "express";
import expressWs from "express-ws";
import cors from "cors";

const app = expressWs(express()).app;
const port = 3001;

app.use(cors());

app.get("/test", (req, res) => {
  res.send("Success");
});

app.ws("/test", (ws, req) => {
  ws.send("Connection opened");

  ws.on("message", (msg) => {
    console.log(msg);
    ws.send(`Received ${msg}`);
  });
});

app.listen(port, () => {
  console.log(`API is running on port ${port}`);
});
