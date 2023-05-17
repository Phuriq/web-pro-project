import express from "express";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const router = express.Router();

router.post('/home', async (req, res) => {
    try {
        console.log(req.body)
        const { movieName, movieReleaseDate, movieHour, movieTitle, movieCategory, movieImage, movieTrailer, movieTheater, showtime } = req.body;

        const createMovie = await prisma.Movie.create({
            data: {
                movieName: movieName,
                movieReleaseDate: movieReleaseDate,
                movieHour: movieHour,
                movieTitle: movieTitle,
                movieCategory: movieCategory,
                movieImage: movieImage,
                movieTrailer: movieTrailer,
                movieTheater: movieTheater,
                showtime: showtime,
            },
        });


        res.json({ Movie: createMovie });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
router.get("/movieall", async (req, res) => {
    try {
        const movies = await prisma.Movie.findMany();
        res.json(movies);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get("/movieinfo/:id", async (req, res) => {
    try {
        const { id } = req.params
        const movies = await prisma.Movie.findUnique({
            where: {
                id: parseInt(id),
            }
        });
        res.status(200).json(movies);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default router;