import User from "../models/userModel.js"
import { v4 as uuidv4 } from 'uuid';
import { setUser } from '../service/auth.js'
const handelCreateUser = async (req, res) => {
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            return res.status(404).json({
                success: false,
                message: "all fildes required",

            })

        }

        const user = await User.create({
            name,
            email,
            password
        })
        return res.status(200).json({
            success: true,
            message: "user created",
            user
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "server erro"
        })
    }
}


const handelLogin = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await User.findOne({ email, password })
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "user doesnt exit",

            })
        }
        const sessionId = uuidv4();
        setUser(sessionId, user)
        res.cookie("uuid", sessionId)

        return res.status(200).json({
            success: true,
            message: "user login",
            id: user._id
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "server erro"
        })
    }
}

const handleLogout = async (req, res) => {
    try {
        const sessionId = req.cookie?.uuid

        if (sessionId) {
            deleteUser(sessionId)
        }
        res.clearcookie("uuid")

        return res.status(200).json({
            success: true,
            message: "logout",
        })

    } catch (error) {
        console.log(error);
        
        res.status(500).json({
            success: false,
            message: "server erro",
            error:error
        })
    }
}


export {
    handelCreateUser,
    handelLogin,
    handleLogout
}