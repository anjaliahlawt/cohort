//jwt has three stage 1.generate 2. decode 3 verify
// not used genrte used sign


const jwt=require("jsonwebtoken");
const user={
    name:"anjali",
    accountno:123456,
};
const token=jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYW5qYWxpIiwiYWNjb3VudG5vIjoxMjM0NTYsImlhdCI6MTcyNzY5NTc3N30.SZgCtW8f5UqZyNiDYGJhgfTtAJ0Q3T5F8Dd4ZXwluUk","abcde");
console.log(token);



//it will decode the data using the detil bit it will give the token not the verify the token

/*
const jwt=require("jsonwebtoken");
const content=
    {
  "name": "anjali",
  "accountno": 123456,
  "iat": 1727695777
}
  const newtoken=jwt.verify("yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYW5qYWxpIiwiYWNjb3VudG5vIjoxMjM0NTYsImlhdCI6MTcyNzY5NTc3N30.2lTNzjw4yszt7_kdBXTkRN1zEgt7YQbVgRkZl5D2sK8","hikjl");
  console.log(newtoken);
*/