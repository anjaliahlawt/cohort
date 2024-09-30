//write a function that takes in a username and password and returns the jwt token with the username encoded inside the object.should return null if the username is not valid email or if the password is less than 6 character .try using the zod libarary.

//function to sign a jwt
const jwt=require("jsonwebtoken");
const jwtpassword="secret";
const zod=require("zod");
const emailschema=zod.string().email();
const passwordschema=zod.string().min(6);
 function signjwt(username,password)
    {  
     const usernameResponse=emailschema.safeParse(username);
     const passwordResponse=passwordschema.safeParse(password);
     if(!usernameResponse.success|| !passwordResponse.success)
        {
            return null;
        }
     const signature=jwt.sign({
        username
     },jwtpassword);
     return signature;
    }
//  const ans=signjwt("anju@gmail.com","asdfgg");
//  console.log(ans);
 

//2. write a function that takes a jwt as input and return true if the jwt decoded(not verified)otherwise return false.

 // function to decode a jwt without a verification

function decodedjwt(signature)
{
  const decoded=jwt.decode(signature);
  if(decoded)
    { 
        return true;
    }
    else
    {
        return false
    }
}
// console.log(decodedjwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFuanVAZ21haWwuY29tIiwiaWF0IjoxNzI3NzAwMDM1fQ.i_dnvBCiG47eR0FHAI_h-UBmE03BFLKWJYHDp3J7700"));



//3 write a function that takes a jwt token as input and return true if the jwt is verified otherwise return false.

//function to decode a jwt wityh verification

function verifyjwt(signature)
{    
    let ans=true;
    try
    {
      jwt.verify(signature,jwtpassword);
    }
    catch(error)
    {
        ans=false;
    }
    return ans;
       
}
const testUsername = "anju@gmail.com";
const testPassword = "asdfge";

// Sign a JWT
const token = signjwt(testUsername, testPassword);
console.log("Generated JWT:", token);

// Decode the JWT
const isDecoded = decodedjwt(token);
console.log("JWT Decoded:", isDecoded);

// Verify the JWT
const isVerified = verifyjwt(token);
console.log("verified token",isVerified);