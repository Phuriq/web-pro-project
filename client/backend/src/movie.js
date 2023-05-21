import express from "express";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const router = express.Router();

// สร้างหนังจากหน้าadmin
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

// ดึงข้อมูลหนังตามId ที่ได้รับ
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

// router.get("/moviesearch", async (req, res) => {
//     try {
//         const movies = await prisma.Movie.findMany();
//         res.json(movies);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// });

// router.post("/moviesearch", async (req, res) => {
//     try {
//         const { movieName } = req.params.movieName
//         const movies = await prisma.Movie.findUnique({
//             where: {
//                 movieName: movieName,
//             }
//         });
//         res.status(200).json(movies);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// });

export default router;