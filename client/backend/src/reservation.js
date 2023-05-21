import express from 'express'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const router = express.Router()

// สร้างข้อมูลการจอง
router.post('/reservation', async (req, res) => {
  try {
    const { roundId, userId, paymentStatus, seatId, price } = req.body

    const createReservation = await prisma.reservation.create({
      data: {
        roundId: parseInt(roundId),
        userId: parseInt(userId),
        paymentStatus: paymentStatus,
        seatId: parseInt(seatId),
        price: price
      }
    })

    res.json(createReservation)
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: error.message })
  }
})

router.get('/reservation/:id', async (req, res) => {
  try {
    console.log(req.params.id)
    const { id } = req.params
    const reservation = await prisma.user.findMany({
      where: {
        id: parseInt(id)
      },
      select: {
        reservations: {
          include: {
            round: {
              include: {
                movie: true,
                theater: true,
              }
            },
            seat: true
          }
        }
      }
    })
    res.json(reservation[0].reservations)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// ดึงข้อมูลการจองทั้งหมด
router.get('/reservation', async (req, res) => {
  try {
    const allReservation = await prisma.reservation.findMany()
    res.json(allReservation)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// สร้างที่นั่งในโรงภาพยนต์
router.post('/seat', async (req, res) => {
  try {
    const { seatNumber, theaterId } = req.body

    const createSeat = await prisma.Seat.create({
      data: {
        seatNumber,
        theater: { connect: { id: theaterId } }
      }
    })

    res.json(createSeat)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})
// ดึงที่นั่งในโรงภาพยนต์ทั้งหมด
router.get('/seat', async (req, res) => {
  try {
    const getSeat = await prisma.Seat.findMany()
    res.json(getSeat)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

export default router
