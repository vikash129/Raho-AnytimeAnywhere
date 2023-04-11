import Room from '../Models/RoomSchema.js';
import User from '../Models/UserSchema.js';
import createError from '../utils/ErrorHandler.js'


export const getAllRooms = async (req, res, next) => {
    try {
        const rooms = await Room.find();
        if (rooms.length) 
            res.status(200).json(rooms);
         else createError(204,'room not found')
            // res.status(200).json({"message": "room not found"});
        
    } catch (error) {
        next(error);
    }
}

export const getRoom = async (req, res, next) => {
    try {
        const id = req.params.id;
        const room = await Room.findById(id);

        if (room) 
            res.status(200).json(room);
         else 
            res.status(200).json({"message": "room not found"});
        
    } catch (error) {
        next(error);
    }
}

export const addRoom = async (req, res, next) => {
    const owner = await User.findOne({username : req.body.owner});

    try {
        const newRoom = new Room({
            ...req.body ,
            owner : owner._id
        });
        const saveRoom = await newRoom.save();
        res.status(201).json(saveRoom);
    } catch (error) {
        next(error);
    }
}
export const updateRoom = async (req, res, next) => {
    try {
        const id = req.params.id;
        await Room.findByIdAndUpdate(id, {$set: req.body});
        res.status(204).json({"message": "room updated successfull"});
    } catch (error) {
        next(error);
    }
}

export const deleteRoom = async (req, res, next) => {
    try {
        const id = req.params.id;
        const room = await Room.findByIdAndDelete(id);
        res.status(204).json(room);
    } catch (error) {
        next(error);
    }
}
