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
const findName = async (userName) => {
    return await prisma.User.findUnique({
        where: {
            userName: userName
        
        },
    });
};


router.post('/signup', async(req, res) => {
    try{
        console.log(req.body);
        const {userName, userPhone ,userEmail, userPassword}  = req.body;
    
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(userPassword, salt);
        

        const createUser = await prisma.User.create({
            data:{
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

        res.json({ accessToken: accessToken, User: createUser});
    } catch(error){
        res.status(400).json({ message: error.message });      
    }
    });

    
    router.post("/signin", async (req, res) => {
        try{
            const {userName, userPassword}  = req.body;

            const checkName = await findName(userName);

            if (!checkName){
                throw new Error("this accout maime wow ");
            }

            const checkPassword = await bcrypt.compare(userPassword,checkName.userPassword);

            console.log(checkPassword);

            if(!checkPassword){
                throw new Error("password is not match");
            }
            delete checkName.userPassword;

            const accessToken = jwt.sign(checkName, process.env.TOKEN, {
                expiresIn:"1h",
            });

            res.json({ accessToken: accessToken , User: checkName });
        }catch(error){
            res.status(400).json({ message: error.message });
        }


        
    });

    router.get("/users", async (req, res) => {
        try{
            const users = await prisma.User.findMany();
            res.json(users);
        }catch(error){
            res.status(400).json({message: error.message });
        }
    });

    export default router;
