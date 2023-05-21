import express from 'express'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const router = express.Router()

// สร้างข้อมูลรอบหนังโดยเป็นข้อมูลที่อยู่ในโรงภาพยนต์
router.post('/', async (req, res) => {
  try {
    const { theaterId, seatRow, seatNumber } = req.body
    const createSeat = await prisma.seat.create({
      data: {
        seatNumber: Number(seatNumber),
        seatRow: seatRow,
        theaterId: theaterId
      }
    })
    res.json(createSeat)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

router.get('/:theaterId', async (req, res) => {
  try {
    const { theaterId } = req.params
    const getSeat = await prisma.seat.findMany({
      where: {
        theaterId: Number(theaterId)
      },
      include: {
        reservations: true
      }
    })
    res.json(getSeat)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

export default router
