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
      const theater = await prisma.Theater.findMany();
      res.json(theater);
    } catch (error) {
      res.status(400).json({ message: error.message });
      console.log(req.param.id)
    }
  });
// // ดึงข้อมูลการจองตั๋วตาม ID
// router.get("/theater", async (req, res) => {
//     try {
//       const theaterId = req.params.id;
  
//       const theaterro = await prisma.Theater.findUnique({
//         where: {
//           id: theaterId
//         }
//       });
  
//       res.json(theaterro);
//     } catch (error) {
//       res.status(400).json({ message: error.message });
//       console.log(req.param.id)
//     }
//   });

export default router;