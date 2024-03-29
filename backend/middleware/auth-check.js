import jwt from 'jsonwebtoken' 
import { HttpError } from '../model/http-error.js';

export const checkAuth= (req,res,next)=>{
    if(req.method=='OPTIONS'){
        return next();
    }

    try{
    const token = req.headers.authorization.split(' ')[1]  //Authorization : "Bearer Token"
    if(!token)
    {

        throw (new HttpError('Authentication Failed',401));
    }
     const decodedToken = jwt.verify(token,'secretkey')
     req.body.creatorId = decodedToken.userId
     req.body.email= decodedToken.email
     next()
    }
    catch(err)
    {
        return next(new HttpError("Authentiaction Failed",401))
    }
}