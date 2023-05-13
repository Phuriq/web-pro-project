import bodyParser from "body-parser";
import express from "express";
import cors from "cors";

import user from "./src/user.js";
import movie from "./src/movie.js";

const app = express();
const router = express.Router();

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  "/api",
  router.use("/user", user),
  router.use("/movie", movie),

);

app.listen(8080, () => {
    console.log(`Example app listening at http://localhost:8080`)
  })