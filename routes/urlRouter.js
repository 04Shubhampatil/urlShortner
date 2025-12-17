
import { Router } from "express";
import { handelGenerateShortUrl,handelGetShortUrl ,handelAnalatics} from '../controller/urlController.js'

const router = Router()


router.post("/", handelGenerateShortUrl)
router.get("/:shortid", handelGetShortUrl)
router.get("/analysis/:shortid", handelAnalatics)

export default router