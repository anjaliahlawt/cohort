const express=require("express");
const app=express();
const users=[{
    name:"anjali",
    kidnyes:[{
      health:false
    }]
}];
app.use(express.json());
app.get("/",function(req,res){
const anjalikidnyes = users[0].kidnyes;
const numberofkidnyes = anjalikidnyes.length;
let numberofhealthkidnyes = 0;
for(let i=0;i<anjalikidnyes.length;i++)
    {
      if(anjalikidnyes[i].health)
        {
            numberofhealthkidnyes=numberofhealthkidnyes+1;
        }
    }
    const numberofunheathykidney=numberofkidnyes - numberofhealthkidnyes;
    res.json({
        anjalikidnyes,
        numberofkidnyes,
        numberofhealthkidnyes,
        numberofunheathykidney
    })

})
app.post("/",function(req,res){
    //console.log(req.body)//undefined
    const ishealth=req.body.ishealth;
    users[0].kidnyes.push({
        health: ishealth
    })
    res.json({
        msg:"done"
    })
})
app.put("/",function(req,res){
    for(let i=0;i<users[0].kidnyes.length;i++)
        {
            users[0].kidnyes[i].health=true;
        }
        res.json({
            msg:"ok"
        })
})
app.delete("/",function(req,res){
    const newkidnyes=[];
    for(let i=0;i<users[0].kidnyes.length;i++)
        {
            if(users[0].kidnyes[i].health)
                {
                    newkidnyes.push({
                        health:true
                    })
                }
        }
        users[0].kidnyes=newkidnyes;
        res.json({
            msg:"all set"
        })
})
app.listen(3002);