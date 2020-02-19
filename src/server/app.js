import express from "express";
import bodyParser from "body-parser";
const app = express();
import router from "./routes/index";

app.use(bodyParser.json());
app.use("/login", router);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
