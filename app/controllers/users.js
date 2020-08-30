const User = require('./../models/users')
module.exports ={
    admin:function(token,refreshToken){
        console.log(token,refreshToken )
        return new Promise((resolve, reject)=>{
            User.findOne({token:token,refreshToken:refreshToken,admin:true},(err,user)=>{
                console.log("user=",user)
                if(user!==null){
                    console.log(user)
                    resolve(true);
                }
                else{
                    resolve(false);
                }
            })
        })
    },
    user:function(phoneNumber,token,refreshtoken){
        console.log(phoneNumber,token,refreshtoken);
        return new Promise((resolve, reject)=>{
            User.findOne({token:token,refreshToken:refreshtoken,phoneNumber:phoneNumber},(err,user)=>{
                console.log("user=",user)
                if(user!==null){
                    console.log(user)
                    resolve(true);
                }
                else{
                    resolve(false);
                }
            })
        })
    }
}