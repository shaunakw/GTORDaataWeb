import express from "express";
import expressWs from "express-ws";
import cors from "cors";

import { DataImport } from "./DataImport";

const app = expressWs(express()).app;
const port = 3001;

const dataImport = new DataImport();

app.use(cors());

app.ws("/data", (ws, req) => {
  ws.on("message", (msg: string) => {
    dataImport.setInputMode(msg);
  });
});

app.listen(port, () => {
  console.log(`API is running on port ${port}`);
});
