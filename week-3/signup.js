const express=require ("express");
const app=express();

const jwt=require("jsonwebtoken");
const jwtPassword="123456";
const ALL_USERS=[
    {
        username:"anjali45@gmail.com",
        password:"123",
        name:"anjali",
    },
    {
        username:"vishu5@gmail.com",
        password:"1234",
        name:"vishu",
    },
    {
        username:"anju65@gmail.com",
        password:"12",
        name:"anju",
    },
];
app.use(express.json());

function userExists(username,password)
{
    let userExists=false;
    for(let i=0;i<ALL_USERS.length;i++)
        {
            if(ALL_USERS[i].username==username&&ALL_USERS[i].password==password)
                {
                    userExists=true;
                }
        }
        return userExists;
}
app.post("/signin",function(req,res)
{
    
    const username=req.body.username;
    const password=req.body.password;
    if(!userExists(username,password))
        {
            return res.status(403).json({
                msg:"users does not exists in db",
            });
        }
        var token =jwt.sign({username:username},jwtPassword);
         return res.json({
            token,
        });
        

});

app.get("/users",function(req,res){
    const token=req.headers.authorization;
    try{
        const decoded=jwt.verify(token,jwtPassword);
        const username=decoded.username;
        // res.json({
        //     users:ALL_USERS
        // })
   }
    catch(err)
    {
         return res.status(403).json({
            msg:"invalid token",
         });
    }
});
app.listen(3005);