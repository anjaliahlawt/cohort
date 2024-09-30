//Ensure if there is ever an exception,the end user sees a status code of 404.
//maintain the errorcount variable whose value should go up every time there is an exception

const express=require('express');
const app=express();
let errorcount=0;
app.get('/user',function(req,res){
    throw new Error("user not found");
    res.status(200).json({
        name:"anjali",
    })
});
app.post('/user',function(req,res){
    res.status(200).json({
        msg:"created dummy user",
    })
})
app.get('/errorcount',function(req,res){
    res.status(200).json({
        errorcount,
    })
});
app.use(function(err,req,res,next){
    res.status(404).send({})
    errorcount=errorcount+1;
})


app.listen(3000,()=>{
    console.log("server ruuning on port 3000");
});