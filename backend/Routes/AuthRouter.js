import express from "express";
import { login, register } from "../controllers/AuthController.js";
// import { verifyAdmin, verifyToken  , verifyUser} from "../utils/VerifyToken.js";

const router = express.Router();

// router.get('/checkAuth' , verifyToken , (req , res,next) => {
//     res.status(200).json({ "message" : 'you are logged in' , "user" : req.user})
// })
// router.get('/checkUser/:id' , verifyUser , (req , res,next) => {
//     res.status(200).json({ "message" : 'you are verified user' , "user" : req.user})

// })
// router.get('/checkAdmin/:id' , verifyAdmin , (req , res,next) => {
//     res.status(200).json({ "message" : 'you are verified admin' , "user" : req.user})

// })

router.post("/register", register)
router.post("/login", login)

export default router