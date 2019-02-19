module.exports = (req,res,next)=>{
    if(req.user.credits<1){
        res.status(402).send({error:"Not Enough Credits ! "})
    }
    next();
};