import express from "express";
import  {updateUser,deleteUser,getUser,getAllUsers}from "../controllers/UserControl.js";
import { verifyAdmin  , verifyUser} from "../utils/VerifyToken.js";

const router = express.Router();

//UPDATE
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET
router.get("/:id", verifyUser, getUser);

//GET ALL
router.get("/", verifyAdmin, getAllUsers);

export default router;
