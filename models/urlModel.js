
import mongoose, { Schema, trusted } from "mongoose";

const urlSchema = new Schema({

    shortId: {
        type: String,
        require: true,
        unique: true
    },
    redirectURL: {
        type: String,
        require: true
    },
    visitHistory: [
        { timestamp: Number }
    ]
}, { timeseries: true })

const URL = mongoose.model("url", urlSchema)

export default URL