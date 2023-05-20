import express from "express";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const router = express.Router();

// สร้างข้อมูลโรงภาพยนต์
router.post("/round", async (req, res) => {
    const {movieId, theaterId, roundStart, roundEnd}  = req.body;
    try{
        const createRound = await prisma.Round.create({
            data:{
              movie: { connect: { id: parseInt(movieId) } },
              theater: { connect: { id: parseInt(theaterId) } },
              roundStart,
              roundEnd,
            }  
        });
        res.json(createRound);
    }catch (error) {
        res.status(400).json({ message: error.message });
        console.log(req.param.id)
    }
});
// ดึงข้อมูลโรงภาพยนต์ทั้งหมด
router.get("/round", async (req, res) => {
    try {
      const round = await prisma.Round.findMany();
      res.json(round);
    } catch (error) {
      res.status(400).json({ message: error.message });
      console.log(req.param.id)
    }
  });
export default router;