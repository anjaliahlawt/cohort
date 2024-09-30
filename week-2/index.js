const express=require("express");
const app=express();
function sum(n)
{
    let ans=0;
    for(let i=1;i<=n;i++)
        {
            ans=ans+i;
        }
        return ans;
}
app.get('/',function(req,res)
{ 
    //localhost3001/?n=1
    const n=req.query.n;
    const ans=sum(n);
   res.send('Hello Anjali'+ans);
    // res.json({
    //     name:"anjali",
    //     age:22
    // })
})
app.listen(3001);