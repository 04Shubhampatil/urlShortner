
import { Router } from "express";
import { handelGenerateShortUrl,handelGetShortUrl ,handelAnalatics,handelGetByUserShortUrl} from '../controller/urlController.js'

const router = Router()


router.post("/", handelGenerateShortUrl)
router.get("/:shortid", handelGetShortUrl)
router.get("/analysis/:shortid", handelAnalatics)
router.get("/getuser/:userid", handelGetByUserShortUrl)

export default router