// import express from "express";
// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()
// const router = express.Router();

// import process from 'process';


// router.post('/blogs', upload.single('blog_image'), async function (req, res, next) {
//     const file = req.file;
//     if (!file) {
//       const error = new Error("Please upload a file");
//       error.httpStatusCode = 400;
//       return next(error);
//     }
  
//     const title = req.body.title;
//     const content = req.body.content;
//     const status = req.body.status;
//     const pinned = req.body.pinned ? 1:0;
  
//     const conn = await pool.getConnection()
//     // Begin transaction
//     await conn.beginTransaction();
  
//     try {
//       let results = await conn.query(
//         "INSERT INTO blogs(title, content, status, pinned, `like`,create_date) VALUES(?, ?, ?, ?, 0,CURRENT_TIMESTAMP);",
//         [title, content, status, pinned]
//       )
//       const blogId = results[0].insertId;
  
//       await conn.query(
//         "INSERT INTO images(blog_id, file_path,main) VALUES(?, ?,?);",
//         [blogId, file.path.substr(6),1])
  
//       await conn.commit()
//       res.redirect("/");
//     } catch (err) {
//       await conn.rollback();
//       next(err);
//     } finally {
//       console.log('finally')
//       conn.release();
//     }
//   });
  

//     export default router;
