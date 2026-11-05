const checkSession=(req,res,next)=>{
    try{
        if(req?.session?.user){
            next();
        }else{
            return res.json({success:false,message:"Invalid session"});
        }

    }catch(error){
        console.log(error);
        return res.json({success:false,message:"Invalid session"});

    }
};
module.exports={checkSession};