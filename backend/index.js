import express from "express";
import mongoose from "mongoose";
import bodyparser from "body-parser";
import routes from "./routes/soccerRoutes";
import cors from 'cors'

const app = express();
const PORT = 5000;

// mongo connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/soccerDB");

// bodyparser setup
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

//CORS setup
app.use(cors())

routes(app);

app.get("/", (req, res) =>
  res.send(`Our Soccer application is running on the port ${PORT}`)
);

app.listen(PORT, () =>
  console.log(`Your soccer server is running on port ${PORT}`)
);
