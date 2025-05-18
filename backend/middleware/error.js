const errorHandler=(err,req,res,next)=>{
    if(res.statusCode){
        res.status(res.statusCode).json({msg:err.message});
    }
    else{
        res.status(500).json({
            msg:err.message,
            stack: process.env.NODE_ENV === 'production' ? null: err.stack
        });
    }
    next();

}

export default errorHandler;