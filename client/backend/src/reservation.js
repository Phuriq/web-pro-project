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

// ดึงข้อมูลการจอง โดยใช้userId
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


export default router