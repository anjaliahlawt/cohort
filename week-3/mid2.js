const express = require('express');
const app = express();
//function isage(age) {
//     if (age > 14) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

function isage(req,res,next)
{
    const age=req.query.age;
    if(age>14)
        next();
    else{
        res.json({
            msg:"sorry your age not yet",
        });
    }
}
app.get('/ride1',isage, function (req, res) {
           res.json(
            {
              msg: "succesful ride1 book",
            })
         
       
         
});
app.get('/ride2', isage,function (req, res) {
    
           res.json(
            {
              msg: "succesful ride2book",
            })
         
       
         
});
app.listen(3006);