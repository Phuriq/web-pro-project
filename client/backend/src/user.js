import express from "express";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const router = express.Router();
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import process from 'process';

// const findEmail = async (userEmail) => {
//     return await prisma.User.findUnique({
//         where: {
//             userEmail: userEmail

//         },
//     });
// };

// เช็คว่า username ตรงกับค่าที่รับเข้ามามั้ย
const findName = async (userName) => {
    return await prisma.User.findUnique({
        where: {
            userName: userName

        },
    });
};

// register
router.post('/signup', async (req, res) => {
    try {
        const { userName, userPhone, userEmail, userPassword } = req.body;

        if(await findName(userName)){
            res.status(400).json({message: "this userName is aleady is exit"})
        }

        const hash = bcrypt.hashSync(userPassword, 10);

        const createUser = await prisma.user.create({
            data: {
                userName: userName,
                userPhone: userPhone,
                userEmail: userEmail,
                userPassword: hash,
            },
        });

        delete createUser.userPassword;

        const accessToken = jwt.sign(createUser, process.env.TOKEN, {
            expiresIn: "1h",
        });

        res.json({ accessToken: accessToken, User: createUser });
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error.message });
    }
});

// Login
router.post("/signin", async (req, res) => {
    try {
        const { userName, userPassword } = req.body;

        const checkName = await findName(userName);

        if (!checkName) {
            throw new Error("this accout not found");
        }

        const checkPassword = await bcrypt.compare(userPassword, checkName.userPassword);

        console.log(checkPassword);

        if (!checkPassword) {
            throw new Error("password is not match");
        }
        delete checkName.userPassword;

        const accessToken = jwt.sign(checkName, process.env.TOKEN, {
            expiresIn: "1h",
        });

        res.json({ accessToken: accessToken, User: checkName });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }



});

// ดึงข่อมูลuser ทั้งหมด
router.get("/users", async (req, res) => {
    try {
        const users = await prisma.User.findMany();
        res.json(users);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default router;
