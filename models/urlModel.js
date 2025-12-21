
import mongoose, { Schema } from "mongoose";

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
    ],

    createdBy: {
        type:Schema.Types.ObjectId,
        ref: "users"
    }
},
    { timeseries: true })

const URL = mongoose.model("url", urlSchema)

export default URL