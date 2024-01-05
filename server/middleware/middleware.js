const jwt = require('jsonwebtoken')

exports.requireLogin =(req,res,next)=>{
    const token =
        req.headers &&
        req.headers.authentication &&
        req.headers.authentication.split(" ")[1]

    if(!token){
        return res.sendStatus(401)
    }

    try{
        const user = jwt.verify(token,process.env.JWT_SECRET)
        req.user = user
        next()
    }catch(err){
        return res.sendStatus(403)
    }
}