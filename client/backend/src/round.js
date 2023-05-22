import express from 'express'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const router = express.Router()

// สร้างข้อมูลรอบหนังโดยเป็น ข้อมูลที่อยู่ในโรงภาพยนต์
router.post('/round', async (req, res) => {
  const { movieId, theaterId, roundStart, roundEnd } = req.body
  try {
    const createRound = await prisma.Round.create({
      data: {
        movie: { connect: { id: parseInt(movieId) } },
        theater: { connect: { id: parseInt(theaterId) } },
        roundStart,
        roundEnd
      }
    })
    res.json(createRound)
  } catch (error) {
    res.status(400).json({ message: error.message })
    console.log(req.param.id)
  }
})
// ดึงข้อมูลรอบหนังทั้งหมด
router.get('/round', async (req, res) => {
  try {
    const round = await prisma.Round.findMany()
    res.json(round)
  } catch (error) {
    res.status(400).json({ message: error.message })
    console.log(req.param.id)
  }
})

// ดึงข้อมูลรอบหนังที่ตรงกับ roundId โดยjoin ตาราง theater กับ movie เพื่อดึง theater กับ movie ที่ ตรงกับ roundId
router.get('/round/:roundId', async (req, res) => {
  try {
    const roundId = req.params.roundId
    const round = await prisma.Round.findUnique({
      where: {
        id: parseInt(roundId)
      },
      include: {
        theater: true,
        movie: true
      }
    })
    res.json(round)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

router.get('/:movieId', async (req, res) => {
  try {
    const movieId = req.params.movieId
    const round = await prisma.theater.findMany({
      include: {
        rounds: {
          where: {
            movieId: parseInt(movieId)
          }
        }
      }
    })
    res.json(round)
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: error.message })
  }
})

export default router
