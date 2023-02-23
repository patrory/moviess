import Movie from "../models/User.js";

export const createMovie = async (req, res, next) => {
  const newMovie = new Movie(req.body);
  try {
    const savedMovie = await newMovie.save();
    res.status(200).json(savedMovie);
  } catch (error) {
    next(error);
  }
};
// single movie
export const getMovie = async (req, res, next) => {
  const newMovie = new Movie(req.body);
  try {
    const movie = await Movie.findById(req.params.id);
    res.status(200).json(movie);
  } catch (error) {
    next(error);
  }
};
// all movie
export const getMovies = async (req, res, next) => {
  try {
    const movies = await Movie.find().limit(req.query.limit);
    res.status(200).json(movies);
  } catch (err) {
    next(err);
  }
};
