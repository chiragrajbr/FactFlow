const Auth={}
const user=require("../Model/User/user")
const jwt=require("jsonwebtoken")


Auth.verify=(req,res,next)=>{
    const token=req.headers.authorization
    let tokendata;
    try{
        tokendata=jwt.verify(token,"123")
        user.find({email:tokendata.email})
        .then(( )=>{
            req.user=tokendata
            next()
        })
        .catch((err)=>{
            res,json(err)
        })
    }
    catch(err){
        res.json(err)
    }
}
module.exports=Auth