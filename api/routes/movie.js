import express from "express";
import { getMovie, getMovies, createMovie } from "../controllers/movie.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();
router.post("/", verifyAdmin, createMovie);
router.get("/", getMovies);
router.get("/find/:id", getMovie);
export default router;
