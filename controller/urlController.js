import URL from '../models/urlModel.js'
import id from 'short-id'

const handelGenerateShortUrl = async (req, res) => {
    try {
        const { url } = req.body
        if (!url) return res.status(400).json({ err: "url required" })
        const shortID = id.generate()
        await URL.create({
            shortId: shortID,
            redirectURL: url,
            visitHistory: [],
            createdBy: req.user._id
        })

        return res.status(200).json({
            success: true,
            message: "url shrorted successfully",
            id: shortID,
            createdBy: req.user._id
        })
    } catch (error) {
        console.log(error);

        return res.status(500)
            .json({ error: "interner server error" })
    }

}

const handelGetShortUrl = async (req, res) => {
    try {
        const shortId = req.params.shortid;

        const entry = await URL.findOneAndUpdate(
            { shortId },
            {
                $push: {
                    visitHistory: {
                        timestamp: Date.now()
                    }
                }
            })
        if (!entry) {
            return res.status(400).json("rong url path")
        }


        return res.redirect(entry.redirectURL)



    } catch (error) {
        console.log(error);

        return res.status(500)
            .json({ error: "interner server error" })
    }
}

const handelAnalatics = async (req, res) => {
    try {
        const shortId = req.params.shortid;
        const result = await URL.findOne({ shortId })
        if (!result) {
            return res.status(404).json({ error: "Short URL not found" })
        }
        // console.log(result.visitHistory);


        return res.status(200).json({
            totalClicks: result.visitHistory.length,
            analytics: result.visitHistory
        })

    } catch (error) {
        console.log(error);

        return res.status(500)
            .json({ error: "interner server error" })
    }
}

const handelGetByUserShortUrl = async (req, res) => {
    try {
       const  userId = req.params.userid

        const user = await URL.findOne({ createdBy: userId })
        if (!user) {
            return res.status(404).
                json({
                    success: false,
                    message: "user not found"
                })
        }

        return res.status(200).json({
            success: true,
            shortId: user.shortId,
            redirectURL: user.redirectURL
        })


    } catch (error) {
        console.log(error);
        return res.status(500)
            .json({
                error: "interner server error"
            })
    }

}

export {
    handelGenerateShortUrl,
    handelGetShortUrl,
    handelAnalatics,
    handelGetByUserShortUrl
}