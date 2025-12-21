
import { Router } from "express";
import { handelCreateUser,handelLogin} from '../controller/userController.js'

const router = Router()


router.post("/",handelCreateUser )
router.post("/login",handelLogin )


export default router