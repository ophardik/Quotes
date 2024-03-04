const signupModel=require("../model/signup");
const loginModel=require("../model/login");
const quotes=require("../Quotes.json");
console.log(quotes.length);



const signup=async(req,res)=>{
    try{
  
        const{phoneNumber,password}=req.body;

       await signupModel.create({
        phoneNumber,
        password,
       });

       return res.status(200).json({
        message:"Account created successfully",
        success:"true",
       });
    }
    catch(error){
        console.log(error);
        return res.status(400).json({
            message:"Error in Signining Up",
            success:"false"
        });
    }
}

const login=async(req,res)=>{
    try{
      const {phoneNumber,password}=req.body;
      const user=await signupModel.findOne({phoneNumber,password});

      if(!user){
        return res.status(401).json({message:"Invalid phoneNumber or password"});
      }

         await loginModel.create({
            phoneNumber,
            password,
         });
          
         const quotesLength=quotes.length;
        const randomQuoteIndex= Math.floor(Math.random() * quotesLength);
        const randomQuote = quotes[randomQuoteIndex];

         
      return res.status(200).json({
        message:"Logged In Successfully",
        success:"true",
        randomQuote: randomQuote,
      });

    }
    catch(error){
        console.log(error);
        return res.status(400).json({
            message:"Error in Signining Up",
            success:"false"
        });
    }
}






module.exports={
    signup,
    login,
}