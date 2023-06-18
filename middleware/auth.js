const jwt = require('jsonwebtoken');

module.exports =(req,res,next)=>{
    try{
        const token = req.headers.autorization.split(' ')[1];
        const decodedToken = jwt.verify(token,'RANDOM_TOKEN_SCRET');
        const userId = decodedToken.userId;
        req.auth = {
            userId:userId
        };
    }catch(error){
        res.status(401).json({error})
    }
};