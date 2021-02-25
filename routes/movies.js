import express from "express";
import {
  getMovies,
  getMovie,
  addMovie,
  deleteMovie,
  editMovie,
} from "../controllers/movies.js";

const router = express.Router();

router.get("/", getMovies);
router.get("/:id", getMovie);
router.post("/", addMovie);
router.delete("/:id", deleteMovie);
router.patch("/:id", editMovie);

export default router;
