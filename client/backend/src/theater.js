import express from "express";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const router = express.Router();

// สร้างข้อมูลโรงภาพยนต์
router.post("/theater", async (req, res) => {
    const {theaterName, theaterLocation}  = req.body;
    try{
        const createTheater = await prisma.Theater.create({
            data:{
                theaterName: theaterName,
                theaterLocation: theaterLocation
            }
        });
        res.json(createTheater);
    }catch (error) {
        res.status(400).json({ message: error.message });
        console.log(req.param.id)
    }
});
// ดึงข้อมูลโรงภาพยนต์ทั้งหมด
router.get("/theater", async (req, res) => {
    try {
      const theaters = await prisma.Theater.findMany();
      res.json(theaters);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

  router.get("/theater/:theaterId", async (req, res) => {
    try {
      const theaterId = req.params.theaterId;
  
      // Retrieve theater and movie information based on theaterId and movieId
  
      const theater = await prisma.Theater.findUnique({
        where: {
          id: theaterId
        }
      });
  
      // Return theater and movie information in the response
      res.json(theater);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  // ดึงข้อมูลการจองตั๋วตาม ID
router.get("/theater/:theaterId/movie/:movieId", async (req, res) => {
  try {
    const theaterId = req.params.theaterId;
    const movieId = req.params.movieId;

    // Retrieve theater and movie information based on theaterId and movieId

    const theater = await prisma.Theater.findUnique({
      where: {
        id: theaterId
      }
    });

    const movie = await prisma.Movie.findUnique({
      where: {
        id: movieId
      }
    });

    // Return theater and movie information in the response
    res.json({ theater, movie });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


export default router;