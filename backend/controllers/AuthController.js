import bcrypt from "bcrypt";
import  createError  from "../utils/ErrorHandler.js";
import jwt from "jsonwebtoken";
import User from "../Models/UserSchema.js"

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const user = new User({
      ...req.body,
      password: hash,
    });
  await user.save();

  const token = jwt.sign( 
    { 
      id: user._id, 
      username : user.username,
      isOwner : user.isOwner,
      isAdmin : user.isAdmin
    },
    process.env.JWT_SECRET_KEY
);
res.
cookie('access_token' , token , { httpOnly : true}).
status(201).
send("User has been created.");

  } catch (err) {
    next(err);
  }
};



export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User not found !"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password !"));

      
      const {username , password, isAdmin, isOwner , ...otherDetails } = user._doc;

      const token = jwt.sign( 
        { 
          id: user._id, 
          username,
          isOwner,
          isAdmin
        },
        process.env.JWT_SECRET_KEY
    );
    res.
    cookie('access_token' , token , { httpOnly : true}).
    status(200).
    json( {details : {...otherDetails}  , isAdmin});

    
  } catch (err) {
    next(err);
  }
};
