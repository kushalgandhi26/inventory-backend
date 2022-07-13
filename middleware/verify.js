const jwt = require("jsonwebtoken")

const verify = (req,res,next) => {
  try {
    const token = req.headers.token
    if(!token){
        return res.status(401).json({message:"Unauthorized"})
    }
    const verified = jwt.verify(token,process.env.TOKEN_KEY)
    if(verified){
        next()
    }
  } catch (error) {
    res.status(401).json({message:"Unauthorized"})
  }
}

module.exports = verify