
import { Router } from "express";
import { handelCreateUser,handelLogin,handleLogout} from '../controller/userController.js'

const router = Router()


router.post("/",handelCreateUser )
router.post("/login",handelLogin )
router.get("/logout",handleLogout )


export default router