import express from "express";
import moviesRoutes from "./routes/movies.js";

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/movies", moviesRoutes);
app.get("/", (req, res) => {
  res.send({
    message: "welcome to my first restful api",
  });
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
