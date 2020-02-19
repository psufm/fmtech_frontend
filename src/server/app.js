import express from "express";
import bodyParser from "body-parser";
const app = express();
import api from "./routes/index";

app.use(bodyParser.json());
app.use("/api", api);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
