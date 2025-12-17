
import URL from '../models/urlModel.js'
import id from 'short-id'

const handelGenerateShortUrl = async (req, res) => {
    try {
        const { redirectURL } = req.body
        if (!redirectURL) return res.status(400).json({ err: "url require" })
        const shortID = id.generate()
        await URL.create({
            shortId: shortID,
            redirectURL,
            visitHistory: []
        })
        return res.status(200).json({
            success: true,
            message: "url shrorted successfully",
            id: shortID
        })
    } catch (error) {
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
            }, { new: true })
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
        const result = await URL.findOne({shortId})
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

export {
    handelGenerateShortUrl,
    handelGetShortUrl,
    handelAnalatics
}