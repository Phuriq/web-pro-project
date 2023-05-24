import express from "express";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const router = express.Router();
import * as yup from "yup";

const movievalidate = yup.object().shape({
    movieName: yup.string().required(),
    movieReleaseDate: yup.date().required(),
    movieHour: yup.string().required(),
    movieTitle: yup.string().required(),
    movieCategory: yup.string().required(),
    movieImage: yup.string().required(),
    movieTrailer: yup.string().required(),
    movieTheater: yup.string().required(),
    showtime: yup.string().required(),
  });

// สร้างหนังจากหน้าadmin
router.post('/admin', async (req, res) => {
    try {
        await movievalidate.validate(req.body, { abortEarly: false });
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
        console.log(error)
        res.status(400).json({ message: error.message });
    }
});

// ดึงข้อมูลหนังทั้งหมด
router.get("/movieall", async (req, res) => {
    try {
        const movies = await prisma.Movie.findMany();
        res.json(movies);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// ดึงข้อมูลหนังตามId ที่ได้รับมาจากพารามิเตอร์ id
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


// ลบข้อมูลหนัง ที่ได้รับมาจากพารามิเตอร์ id
router.delete("/movieinfo/:id", async (req, res) => {
    try {
        const { id } = req.params
        const deletedMovie = await prisma.Movie.delete({
            where: {
                id: parseInt(id),
            }
        });
        res.status(200).json({ message: 'Movie deleted', movie: deletedMovie });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


export default router;