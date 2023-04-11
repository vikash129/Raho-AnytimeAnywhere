import jwt from 'jsonwebtoken'
import createError from "./ErrorHandler.js"

export const verifyToken = (req ,res , next) =>{

    const token = req.cookies.access_token ;

    if(!token){
        return next(createError(401  , 'You are not authenticated'))
    }

    jwt.verify(token , process.env.JWT_SECRET_KEY , (err , user) => {
        
        if(err)
        return next(createError(403  , 'You are session had been expired !!!!!! '))
        req.user = user 
        next();
    })    
}

export const verifyUser = (req ,res , next) =>{

    verifyToken(req,res, next, () =>{
            if(req.user.id == req.params.id || req.user.isAdmin){
                    next();
            }
            else{
                if(err) return next(createError(403  , 'You are not a verified used !!!! '))

            }
    })
}
export const verifyAdmin = (req ,res , next) =>{

    verifyToken(req,res, next, () =>{
            if(req.user.isAdmin){
                    next();
            }
            else{
                if(err) return next(createError(403  , 'You are not an Admin !!!! '))

            }
    })
}

