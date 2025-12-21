
import { getUser } from '../service/auth.js'

const restricLogedInUserOnly = (req, res, next) => {

    const userid = req.cookies?.uuid


    if (!userid) {
        return res.status(404).json({
            success: false,
            message: "user id not authenticated"
        })
    }

    const user = getUser(userid)

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "user not authenticated"
        })
    }
    req.user = user;
    next()

}
export {
    restricLogedInUserOnly
}