import express from 'express'
import {getAllRooms , getRoom , addRoom , deleteRoom , updateRoom} from '../controllers/RoomControll.js'
import { verifyAdmin  , verifyUser} from "../utils/VerifyToken.js";

const roomRouter = express.Router();


roomRouter.get("/"  , getAllRooms) ;
roomRouter.get("/:id", getRoom) ;
roomRouter.post("/",verifyUser, addRoom) ;
roomRouter.delete("/:id",verifyUser, deleteRoom) ;
roomRouter.put("/:id",verifyUser , updateRoom) ;

export default roomRouter;
