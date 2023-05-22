import express from "express";
import { PrismaClient } from '@prisma/client';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import process from 'process';
import * as yup from "yup";


const prisma = new PrismaClient();
const router = express.Router();

// validate
const signupvalidate = yup.object().shape({
  userName: yup.string().required(),
  userPhone: yup.string().required(),
  userEmail: yup.string().email().required(),
  userPassword: yup.string().required().min(6),
});

//  หาว่าชื่อ usernameที่รับเช้ามามีซ้ำหรือไม่ ถ้าไม่พบก็คืนค่าว่าง
const findName = async (userName) => {
  return await prisma.User.findUnique({
    where: {
      userName: userName,
    },
  });
};

// เช็คว่าอีเมลซ้ำมั้ย
const findEmail = async (userEmail) => {
  return await prisma.User.findUnique({
    where: {
      userEmail: userEmail,
    },
  });
};

// register
router.post('/signup', async (req, res) => {
  try {
    await signupvalidate.validate(req.body, { abortEarly: false });

    const { userName, userPhone, userEmail, userPassword } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(userPassword, salt);

    const checkName = await findName(userName);
    const checkEmail = await findEmail(userEmail);

    if (checkName) {
      throw new Error("This username is already registered");
    }

    if (checkEmail) {
      throw new Error("This email is already registered");
    }

    const createUser = await prisma.User.create({
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
    res.status(400).json({ message: error.message });
  }
});
const signinvalidate = yup.object().shape({
    userName: yup.string().required(),
    userPassword: yup.string().required().min(4),
  });

// Login
router.post("/signin", async (req, res) => {
  try {
    await signinvalidate.validate(req.body, { abortEarly: false });
    const { userName, userPassword } = req.body;

    const checkName = await findName(userName);

    if (!checkName) {
      throw new Error("This username is not registered");
    }

    const checkPassword = await bcrypt.compare(
      userPassword,
      checkName.userPassword
    );

    console.log(checkPassword);

    if (!checkPassword) {
      throw new Error("Password is not match");
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

// ดึงข้อมูล user ทั้งหมด
router.get("/users", async (req, res) => {
  try {
    const users = await prisma.User.findMany();
    res.json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;