// const express=require('express');
// const app= express();
// app.get('/health-checkup',function(req,res)
// {
//     const kidneyid=req.query.kidneyid;
//     const username=req.headers.username;
//     const password=req.headers.password;
//     if(username!="anjali"&&password!="pass")
//         {
//             res.status(403).json({
//                 msg:"users does not exist",
//             });
//             return;
//         }
//         if(kidneyid!=1&&kidneyid!=2)
//             {
//                 res.status(411).json({
//                 msg:"wrong input",
//                 });
//                 return;
//             }
//             res.send("your heart healthy");
// });

// app.listen(3001);

// using middleware
/*
const express=require('express');
const app=express();
app.use(express.json());

function usermiddleware(req,res,next)
{   
     const username=req.headers.username;
    const password=req.headers.password;
    if(username!="anjali"&&password!="pass")
        {
            res.status(403).json({
                msg:"incorrect username and password",
            });
        }
        else
        {
            next();
        }
};

function kidneymiddleware(req,res,next)
{ 
    const kidneyid=req.query.kidneyid;
    if(kidneyid!=1&&kidneyid!=2)
        {
            res.status(403).json({
                msg:"incorrect inputs",
            });
        }
        else
        {
            next();
        }
};

app.get('/health-checkup',usermiddleware,kidneymiddleware,function(req,res){
    res.send("your are healthy");
});
app.get('/kidney-check',usermiddleware,kidneymiddleware,function(req,res){
    res.send("your kidney is healthy");
});
app.get('/heart-check',usermiddleware,function(req,res){
    res.send("your heart is healthy");
});
// app.post('/health-checkup',usermiddleware,kidneymiddleware,function(req,res){
//     const kidney=req.body.kidney;
//     const kidneylength=kidney.length;
//     res.send("the length"+kidneylength);
// });
// app.use((err,req,res,next)=>{
//     res.status(500).send("an intenal eror");
// });


app.listen(3003);

*/


//using of zod

const zod= require('zod');
function validateinput(obj)
{
    const schema=zod.object
    ({
          email:zod.string().email(),
          password:zod.string().min(8)
    })
    const response=schema.safeParse(obj);
    console.log(response);
}

validateinput({
    email:"anjali@gmail.com",
    password:"12345678"
});