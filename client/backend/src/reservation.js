import express from "express";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const router = express.Router();

// สร้างการจองตั๋ว
router.post("/reservation", async (req, res) => {
  try {
    const { round, roundId, userId, paymentStatus, seatAmount, seat, seatId } = req.body;

    const createReservation = await prisma.Reservation.create({
      data: {
        round,
        roundId,
        userId,
        paymentStatus,
        seatAmount,
        seat,
        seatId
      }
    });

    res.json(createReservation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
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
  router.get("/seat", async (req, res) => {
    try {
      const getSeat = await prisma.Seat.findMany();
      res.json(getSeat);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

// ดึงข้อมูลการจองตั๋วตาม ID
router.get("/reservation/:id", async (req, res) => {
  try {
    const reservationId = req.params.id;

    const reservation = await prisma.Seat.findUnique({
      where: {
        id: reservationId
      }
    });

    res.json(reservation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;