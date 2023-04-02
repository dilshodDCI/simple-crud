import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import post from "./routes/post.js";
import cors from "cors";

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
dotenv.config();

const PORT = process.env.PORT;

//http://localhost:5000/user
app.use("/posts", post);

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() => {
    app.listen(PORT, () =>
      console.log("DB connected and serevr listening on port: ", PORT),
    );
  })
  .catch((err) => console.log(err));
