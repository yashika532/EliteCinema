import { User } from "../models/userModel.js";
import jwt from "jsonwebtoken"


export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                message: "Please fill all the fields",
                success: false
            });
        }
        const user = await User.findOne({ email });
        if (!user || user.password !== password) {
            return res.status(400).json({
                message: "Invalid email / password",
                success: false
            });
        }

        const tokenData = { id: user._id };
        const token = await jwt.sign(tokenData, "gyuguu76tg7g", { expiresIn: "1d" });
        res.status(200).cookie("token", token, { httpOnly: true }).json({
            message: `Login successful, welcome back! ${user.fullName}`,
            success: true,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server error",
            success: false
        });
    }
}


export const Logout = async (req, res) => {
    try {
        // Deleting cookie by setting it to an empty value and expiring it immediately
        return res.status(200).cookie("token", "", { expires: new Date(0), httpOnly: true }).json({
            message: "Logout successful",
            success: true
        });
    } catch (error) {
        console.error("Error during logout:", error);
        return res.status(500).json({
            message: "Server error",
            success: false
        });
    }
}



export const Register = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;

        if (!fullName || !email || !password) {
            return res.status(400).json({
                message: "Please fill all the fields",
                success: false
            });
        }

        const user = await User.findOne({ email });
        if (user) {
            return res.status(409).json({
                message: "User already exists",
                success: false
            });
        }

        await User.create({
            fullName,
            email,
            password,
        });

        return res.status(201).json({
            message: "User created successfully",
            success: true
        });
    } catch (error) {
        console.error("Error registering user:", error);
        return res.status(500).json({
            message: "Server error",
            success: false
        });
    }
}
