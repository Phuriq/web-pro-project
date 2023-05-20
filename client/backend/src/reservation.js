import express from "express";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const router = express.Router();

// สร้างข้อมูลการจอง
router.post("/reservation", async (req, res) => {
  try {
    const { roundId, userId, paymentStatus, seatAmount, seatId } = req.body;

    const createReservation = await prisma.Reservation.create({
      data: {
        round: { connect: { id: parseInt(roundId) } },
        user: { connect: { id: parseInt(userId) } },
        paymentStatus: paymentStatus,
        seatAmount: seatAmount.length,
        seat: { connect: { id: parseInt(seatId) } },
      }
    });

    res.json(createReservation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// ดึงข้อมูลการจองทองหมด
router.get("/reservation", async (req, res) => {
  try {
    const allReservation = await prisma.Reservation.findMany();
    res.json(allReservation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// สร้างที่นั่งในโรงภาพยนต์
router.post("/seat", async (req, res) => {
    try {
      const { seatNumber, theaterId } = req.body;
  
      const createSeat = await prisma.Seat.create({
        data: {
          seatNumber,
          theater: { connect: { id: theaterId } },
        },
      });
  
      res.json(createSeat);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  // ดึงที่นั่งในโรงภาพยนต์ทั้งหมด
  router.get("/seat", async (req, res) => {
    try {
      const getSeat = await prisma.Seat.findMany();
      res.json(getSeat);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });



export default router;