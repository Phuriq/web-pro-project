import express from "express";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const router = express.Router();

router.post('/home', async(req, res) => {
    try{
        console.log(req.body)
        const {movieName, movieReleaseDate , movieHour, movieTitle}  = req.body;
    

        const createMovie = await prisma.Movie.create({
            data:{
                movieName: movieName,
                movieReleaseDate: movieReleaseDate,
                movieHour: movieHour,
                movieTitle: movieTitle,
            },
        });


          res.json({ Movie: createMovie});
    } catch(error){
        res.status(400).json({ message: error.message });      
    }
    });
    router.get("/movieall", async (req, res) => {
        try{
            const movies = await prisma.Movie.findMany();
            res.json(movies);
        }catch(error){
            res.status(400).json({message: error.message });
        }
    });
    export default router;