import { User } from "../models/userModel.js";

export const Register= async(req,res)=>{
    try{
        const {fullName,email,password}=req.body;
        if(!fullName || !email || !password)
            {
                return res.status(401).json({
                    message:"Please fill all the fields",
                    success:false
                })
            }

            const user=await User.findOne({email});
            if(user)
                {
                    return res.status(401).json({
                        message:"User already exists",
                        success:false
                    })
                }
            await User.create({
                fullName,
                email,
                password,
            });
            return res.status(201).json({
                message:"User created successfully",
                success:true
            })
    }
    catch(error)
    {
        console.log(error);
        
    }
}