import express from 'express'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const router = express.Router()

// สร้างข้อมูลโรงภาพยนต์
router.post('/theater', async (req, res) => {
  const { theaterName, theaterLocation } = req.body
  try {
    const createTheater = await prisma.Theater.create({
      data: {
        theaterName: theaterName,
        theaterLocation: theaterLocation
      }
    })
    res.json(createTheater)
  } catch (error) {
    res.status(400).json({ message: error.message })
    console.log(req.param.id)
  }
})
// ดึงข้อมูลโรงภาพยนต์ทั้งหมด
router.get('/theater', async (req, res) => {
  try {
    const theaters = await prisma.Theater.findMany()
    res.json(theaters)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// ดึงข้อมูลโรงภาพยนต์โดยใช้ theaterId
// router.get('/:theaterId', async (req, res) => {
//   try {
//     const theaterId = req.params.theaterId


//     const theater = await prisma.Theater.findUnique({
//       where: {
//         id: theaterId
//       }
//     })

//     res.json(theater)
//   } catch (error) {
//     res.status(400).json({ message: error.message })
//   }
// })


export default router
